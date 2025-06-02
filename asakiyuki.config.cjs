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
			obfuscateName: false,
		},
	},
	installer: {
		autoInstall: true,
	},
	manifest: {
		name: "Bedrock Live Wallpaper",
		description: "Compatible with BetMC UI and Neko UI\nDeveloped by Asaki Yuki (@asakizuki)",
		version: [1, 0, 1],
	},
}

module.exports = { config }
