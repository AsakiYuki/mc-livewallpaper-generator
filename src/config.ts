export const CONFIGS: InterfaceConfigs = require(process.cwd() + "/.custom/config.cjs").config;


// type
export interface InterfaceConfigs {
    input_file_name: string;
    fps: number;
    resolution: RESOLUTION;
    exportType: EXPORT_TYPE;
    quality: QUALITY;
    support: SUPPORT;
}

type SUPPORT = "betmc_ui" | "vanilla"
type RESOLUTION = "3840x2160" | "1920x1080" | "1280x720"
type EXPORT_TYPE = "jpg" | "png"
type QUALITY =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
