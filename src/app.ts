import fs from "fs";
import progress from "cli-progress";

import { spawn, execSync } from "child_process";
import { Log } from "jsonui-scripting";

import { file } from "./get-video-file";
import { CONFIGS } from "../.custom/config";
import generator from "./generator";

if (!file) {
    Log.error("Video file not found, please add a file named 'input.mp4', or 'input.mkv'.");
    process.exitCode = 1;
}

try {
    execSync("ffmpeg --help", { stdio: "ignore" })
} catch (error) {
    Log.error("FFMPEG not found, please install FFMPEG.");
    process.exitCode = 1;
}

try {
    execSync("ffprobe -help", { stdio: "ignore" })
} catch (error) {
    Log.error("FFPROBE not found, please install FFPROBE.");
    process.exitCode = 1;
}

if (process.exitCode !== 1) {
    if (!fs.existsSync(".bedrock/textures/wallpapers"))
        fs.mkdirSync(".bedrock/textures/wallpapers", { recursive: true });
    else {
        fs.rmSync(".bedrock/textures/wallpapers", { recursive: true });
        fs.mkdirSync(".bedrock/textures/wallpapers");
    }

    console.log('---------- CONVERING ----------')

    const duration = +execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 .custom/${file}`, { stdio: "pipe" }).toString();

    const bar = new progress.SingleBar({
        format: '\x1b[34mSplitting to Frames\x1b[0m [\x1b[32m{bar}\x1b[0m] \x1b[34m{percentage}%\x1b[0m',
        barCompleteChar: '#',
        barIncompleteChar: ' ',
        hideCursor: true
    });

    bar.start(duration, 0);

    const ffmpeg = spawn("ffmpeg", [
        "-progress", "pipe:1",
        "-i", `.custom/${file}`,
        "-q:v", CONFIGS.quality.toString(10),
        "-s", CONFIGS.resolution,
        "-fpsmax", CONFIGS.fps.toString(10),
        `.bedrock/textures/wallpapers/bg_frame_%d.${CONFIGS.exportType}`
    ]);

    ffmpeg.stdout.on("data", (chunk) => {
        const chunkStr = chunk.toString();
        const current = +chunkStr.match(/(?<=out_time_us\=)\d+/)[0] / 1e6;

        bar.update(current);
    })

    ffmpeg.on("close", () => {
        bar.update(duration);
        bar.stop();
        console.log();
        generator();
    })
}