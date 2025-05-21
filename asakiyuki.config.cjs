// ! DO NOT SET 'obfuscateName' TO 'true'. IF YOU SET IT 'true'
// ! THE NAME WILL BE GENERATED TO A RANDOM STRING AND
// ! JSONUI CANNOT READ IT!

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
		autoInstall: false,
	},
	manifest: {
		name: "BetMC UI Live Wallpaper [JSONUI-SCRIPTING Projects]",
		description: "Developed by Asaki Yuki (@asakizuki)",
		version: [1, 0, 0],
	},
}

module.exports = { config }
