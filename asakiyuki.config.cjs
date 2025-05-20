// ! DO NOT SET 'obfuscateName' TO 'true'. IF YOU SET IT 'true'
// ! THE NAME WILL BE GENERATED TO A RANDOM STRING AND
// ! JSONUI CANNOT READ IT!

/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
	compiler: {
		autoCompress: false,
		fileExtension: "json",
		UI: {
			obfuscateType: true,
			namespaceLength: 5,
		},
	},
	installer: {
		autoInstall: true,
		developEvironment: true,
	},
	manifest: {
		name: "BetMC UI Live Wallpaper [JSONUI-SCRIPTING Projects]",
		description: "Developed by Asaki Yuki (@asakizuki)",
	},
}

module.exports = { config }
