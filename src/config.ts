export const CONFIGS: InterfaceConfigs = require(process.cwd() + "/.custom/config.cjs").config;


// type
export interface InterfaceConfigs {
    input_file_name: string;
    fps: number;
    resolution: RESOLUTION;
    exportType: EXPORT_TYPE;
    quality: QUALITY;
    support: SUPPORT;
    blur: BLUR;
}

type SUPPORT = "custom_ui" | "vanilla"
type RESOLUTION = "3840x2160" | "1920x1080" | "1280x720"
type EXPORT_TYPE = "jpg" | "png"
type QUALITY = number
type BLUR = number;