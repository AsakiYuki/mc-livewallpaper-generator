# Introduction

A live wallpaper generators for [BetMC UI](https://github.com/BetMC2411/BetMC_UI/releases/tag/betmc_ui_releases), using [FFMPEG](https://www.ffmpeg.org/) and [JSONUI SCRIPTING](https://github.com/AsakiYuki/JsonUI-Scripting)

Note: you also need to install the [BetMC UI](https://github.com/BetMC2411/BetMC_UI/releases/tag/betmc_ui_releases) resource packs before you can use this project!

# Getting Started

Before getting started, you need to install the necessary components to run, including:

## Windows

For Windows users, you may need to use [Scoop](https://scoop.sh/) to install the necessary software to use the project. Open PowerShell and run the following command:

```ps
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

And after successfully installing [Scoop](https://scoop.sh/), run the following commands to install the required software:

```ps
scoop install git bun ffmpeg
```

## Arch Linux

For Arch Linux users, you need to use an AUR helper like yay to install the following packages.

```bash
yay -S bun git ffmpeg
```

# Installation

After installing the necessary packages, you need to clone this project and install the required npm packages to use it by running the following command:

```bash
# clone this repo
git clone https://github.com/AsakiYuki/mc-livewallpaper-generator.git
# change directory to "mc-livewallpaper-generator"
cd ./mc-livewallpaper-generator
# install npm packages
bun install
```

# Usage

To use the project, you need to take a video file with the original format `mp4`, or `mkv`, put it into the `.custom` folder, and rename it to `input.mp4` or `input.mkv` like this:

![Example 1](/example/1.png)

And then you need to run the project to build a live wallpaper resource packs.

```bash
bun run build
```

<!-- After running, the project will not return any errors and you will have successfully created a resource pack. Usually, your resource pack will be automatically installed into your game, and you just need to launch the game and enjoy it. -->

![Example 1](/example/2.png)

# Configure

You can also configure by editing the file `config.ts` in the `.custom` folder with parameters such as fps, resolution, and more.

```ts
export const CONFIGS: CONFIGS = {
	// input file name (exclude extension)
	input_file_name: "input",
	// fps
	fps: 15,
	// resolution
	resolution: "1280x720",
	// export type
	exportType: "jpg",
	// quality scale
	quality: 1,
}
```
