/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
	compiler: {
		autoCompress: false,
		fileExtension: "json",
	},
	installer: {
		autoInstall: true,
		developEvironment: true,
	},
	manifest: {
		name: "Walpaper Generators for BetMC UI",
		description: "Developed by Asaki Yuki",
	},
}

module.exports = { config }
