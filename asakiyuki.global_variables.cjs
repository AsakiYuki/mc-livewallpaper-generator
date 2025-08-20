const {
	config: { version, creator_name },
} = require("./.custom/config.cjs")
const {} = require("asajs")

const global_variables = {
	experience_text_color: ["#ffffff"],
	neko_ui_extension_version: version,
	neko_ui_extension_creator_name: creator_name,
}

module.exports = { global_variables }
