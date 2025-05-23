/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
	compiler: {
		autoCompress: true,
		fileExtension: "",
		UI: {
			namespaceAmount: 1,
			obfuscateName: true,
		},
	},
	installer: {
		autoInstall: true,
	},
	manifest: {
		name: "BetMC UI Live Wallpaper [JSONUI-SCRIPTING Projects]",
		description: "Developed by Asaki Yuki (@asakizuki)",
		version: [1, 0, 0],
	},
}

module.exports = { config }
