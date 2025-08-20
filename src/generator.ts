import { UI, Animation, AnimationTypes, AnimationKey } from "asajs"
import { readdirSync } from "fs"
import { bgContainer } from "./injector"
import { CONFIGS } from "./config"
import { spawnSync } from "child_process"

export default function generator(duration: number) {
	const frameFilePath = "textures/wallpapers/bg_frame_[FRAME]." + CONFIGS.exportType
	const totalFrames = readdirSync(".bedrock/textures/wallpapers").length

	const durationPerFrame = duration / totalFrames

	const keyFrames: AnimationKey[] = []

	spawnSync("ffmpeg", [
		"-i",
		`.bedrock/textures/wallpapers/bg_frame_${(totalFrames / 2) << 0}.${CONFIGS.exportType}`,
		"-vf",
		`gblur=sigma=${CONFIGS.blur}`,
		".bedrock/textures/wallpapers/blur." + CONFIGS.exportType,
	])

	for (let index = 0; index < totalFrames; index++) {
		const frame = UI.image(
			{
				fill: true,
				size: "100%",
				x: `${(15 - (index % 30)) * -100}%`,
				y: `${(15 - Math.floor(index / 30)) * -100}%`,
				texture: frameFilePath.replace("[FRAME]", (index + 1).toString(10)),
			},
			{
				name: `frame_${index}`,
				namespace: "wallpaper_frame",
			}
		)

		const pos: any = [`${(15 - (index % 30)) * 100}%`, `${(15 - Math.floor(index / 30)) * 100}%`]

		keyFrames.push({
			duration: durationPerFrame,
			from: pos,
			to: pos,
		})

		bgContainer.addChild(frame)
	}

	const anim = Animation.register({
		type: AnimationTypes.Offset,
		from: ["0%", "0%"],
		loop: true,
		smartCycle: false,
		keyFrames,
	})

	bgContainer.addAnimation(anim)
}
