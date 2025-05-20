import fs from "fs";
import progress from "cli-progress";

import { spawn, execSync } from "child_process";
import { UI, Log } from "jsonui-scripting";

import { file } from "./get-video-file";
import { CONFIGS } from "../.custom/config";
import generator from "./generator";

if (!file) {
    Log.error("Video file not found, please add a file named 'input.mp4', 'input.webm', 'input.mkv', or 'input.flv'.");
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
        fs.rmSync(".bedrock/textures/wallpapers", { recursive: true, force: true });
        fs.mkdirSync(".bedrock/textures/wallpapers");
    }

    console.log('---------- CONVERING ----------')

    const duration = +execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 .custom/${file}`, { stdio: "pipe" }).toString();
    const totalFrames = Math.round(duration * CONFIGS.fps);

    const bar = new progress.SingleBar({
        format: '\x1b[34mSplitting to Frames\x1b[0m [\x1b[32m{bar}\x1b[0m] \x1b[34m{percentage}% | {current}/{total} frames\x1b[0m',
        barCompleteChar: '#',
        barIncompleteChar: ' ',
        hideCursor: true
    });

    bar.start(totalFrames, 0, { current: 0, total: totalFrames });

    const ffmpeg = spawn("ffmpeg", [
        "-progress", "pipe:1",
        "-nostats",
        "-i", `.custom/${file}`,
        "-s", CONFIGS.resolution,
        "-r", CONFIGS.fps.toString(10),
        `.bedrock/textures/wallpapers/bg_frame_%d.${CONFIGS.exportType}`
    ]);

    ffmpeg.stdout.on("data", (chunk) => {
        const chunkStr = chunk.toString();
        const frames = +chunkStr.match(/(?<=frame\=)\d+/)[0];

        bar.update(frames, {
            current: frames
        });
    })

    ffmpeg.on("close", () => {
        bar.update(totalFrames, { current: totalFrames });
        bar.stop();
        console.log();
        generator();
    })
}