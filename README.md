# Introduction

A live wallpaper generators for some of [your favorite UI resource packs](https://github.com/AsakiYuki/mc-livewallpaper-generator?tab=readme-ov-file#supported-ui-packs), using [FFmpeg](https://www.ffmpeg.org/) and [JsonUI Scripting](https://github.com/AsakiYuki/JsonUI-Scripting)

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
scoop install git nodejs ffmpeg
```

## Arch Linux

For Arch Linux users, you need to use an AUR helper like yay to install the following packages.

```bash
yay -S --needed npm nodejs git ffmpeg
```

# Installation

After installing the necessary packages, you need to clone this project and install the required npm packages to use it by running the following command:

```bash
# clone this repo
git clone https://github.com/AsakiYuki/mc-livewallpaper-generator.git
# change directory to "mc-livewallpaper-generator"
cd ./mc-livewallpaper-generator
# install npm packages
npm install
# build this project
npm run build
```

# Usage

To use the project, you need to take a video file with the original format `mp4`, or `mkv`, put it into the `.custom` folder, and rename it to `input.mp4` or `input.mkv` like this:

![Example 1](/example/1.png)

And then you need to run the project to build a live wallpaper resource packs.

```bash
npm run node-build
```

<!-- After running, the project will not return any errors and you will have successfully created a resource pack. Usually, your resource pack will be automatically installed into your game, and you just need to launch the game and enjoy it. -->

![Example 1](/example/2.png)

# Configure

You can also configure by editing the file `config.cjs` in the `.custom` folder with parameters such as fps, resolution, and more.

# Supported UI packs

-   BetMC UI: [BetMC's community](https://discord.com/invite/6ZVDWUJUcU)
-   Neko UI: [Han's community](https://discord.gg/K4ktq5pQZK)

# Know issue

Sometimes when you launch Minecraft, you'll only see a completely black background. You can double-check whether your resource pack has been properly installed. If it has, then it's a Minecraft issue where it's unable to read the image. The only way to fix this is to try restarting the game or go into the `config.cjs` file inside the `.custom` folder, tweak it, and then run the command `npm run node-build`.
