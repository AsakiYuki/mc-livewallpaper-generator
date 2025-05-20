/**
 * Configuration object for the JsonUI Scripting build process.
 * @type {import('jsonui-scripting').Config}
 */
const config = {
    compiler: {
        autoCompress: false,
        fileExtension: "json",
        encodeJson: false,
        UI: {
            nameLength: 32,
            namespaceAmount: 16,
            namespaceLength: 32,
            obfuscateName: false,
            obfuscateType: false,
        },
    },
    installer: {
        autoInstall: true,
        developEvironment: true,
        previewVersion: false,
        customPath: false,
        installPath: "/your/minecraft/data/path",
    },
    manifest: {
        name: "Walpaper Generators for BetMC UI",
        description: "Developed by Asaki Yuki",
    },
};

module.exports = { config }