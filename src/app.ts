import { UI } from "jsonui-scripting";
import { config, background } from "./injector";

config.override.setProperties({
    $use_background_static_customs: false,
    $use_setting_background_static_customs: false,
    $use_background_animation: true
});