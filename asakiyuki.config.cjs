// ! DO NOT SET 'obfuscateName' TO 'true'. IF YOU SET IT 'true'
// ! THE NAME WILL BE GENERATED TO A RANDOM STRING AND
// ! JSONUI CANNOT READ IT!

const { existsSync } = require("fs")

const flakpakVersionPath = `${process.env.HOME}/.var/app/io.mrarm.mcpelauncher/data/mcpelauncher`

/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
	compiler: {
		autoCompress: true,
		UI: {
			namespaceAmount: 1,
		},
	},
	installer: {
		autoInstall: true,
		developEvironment: true,
		customPath: existsSync(flakpakVersionPath),
		installPath: flakpakVersionPath,
	},
	manifest: {
		name: "BetMC UI Live Wallpaper [JSONUI-SCRIPTING Projects]",
		description: "Developed by Asaki Yuki (@asakizuki)",
	},
}

module.exports = { config }
