import { Modify } from "jsonui-scripting";

export const config = Modify.register("betmc_config/config.json", "betmc_main_config");
export const background = Modify.register("betmc_ui/betmc_common/betmc_ui_common.json", "betmc_animation_background_frame");