/**
 * @type {import('../src/config').InterfaceConfigs}
 */
const config = {
	resolution: "1280x720",
	fps: 30,
	exportType: "jpg",
	quality: 1,
	blur: 5,
	input_file_name: "input",
	support: "custom_ui",
	version: "1.0",
	creator_name: "Asaki Yuki",
}

/**
 * @type {import("asajs").Config["manifest"]}
 */
const manifest = {
	name: "Bedrock Live Wallpaper",
	description: `Compatible with BetMC UI and Neko UI
Developed by Asaki Yuki (@asakizuki)`,
	version: [1, 0, 1],
}

module.exports = { config, manifest }
