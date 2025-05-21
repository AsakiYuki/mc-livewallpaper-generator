import { UI, Animation, AnimationTypes, AnimationKey } from "jsonui-scripting";
import { bgContainer } from "./injector";
import { readdirSync } from "fs";
import { CONFIGS } from "../.custom/config";

export default function generator() {
    const frameFilePath = 'textures/wallpapers/bg_frame_[FRAME].' + CONFIGS.exportType;
    const totalFrames = readdirSync(".bedrock/textures/wallpapers").length;

    const durationPerFrame = 1 / CONFIGS.fps;

    const keyFrames: AnimationKey[] = [];

    for (let index = 0; index < totalFrames; index++) {
        const frame = UI.image({
            fill: true,
            size: "100%",
            x: `${(15 - (index % 30)) * -100}%`,
            y: `${(15 - Math.floor(index / 30)) * -100}%`,
            texture: frameFilePath.replace("[FRAME]", (index + 1).toString(10))
        }, {
            name: `frame_${index}`,
            namespace: "wallpaper_frame"
        });

        const pos: any = [`${(15 - (index % 30)) * 100}%`, `${(15 - Math.floor(index / 30)) * 100}%`];

        keyFrames.push({
            duration: durationPerFrame,
            from: pos,
            to: pos
        });

        bgContainer.addChild(frame);
    }

    const anim = Animation.register({
        type: AnimationTypes.Offset,
        from: ["0%", "0%"],
        loop: true,
        keyFrames
    });

    bgContainer.addAnimation(anim);
}