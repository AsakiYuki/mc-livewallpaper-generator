const { manifest } = require("./.custom/config.cjs")

/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
	compiler: {
		autoCompress: true,
		UI: {
			namespaceAmount: 1,
			obfuscateName: true,
		},
	},
	installer: {
		autoInstall: true,
	},
	manifest,
}

module.exports = { config }
