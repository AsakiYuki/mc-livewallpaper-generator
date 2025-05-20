export const CONFIGS: CONFIGS = {
    // input file name (exclude extension)
    input_file_name: "input",
    // fps
    fps: 15,
    // resolution
    resolution: "1280x720",
    // export type
    exportType: "jpg",
}

type RESOLUTION = "1920x1080" | "1280x720"
type EXPORT_TYPE = "jpg" | "png"

interface CONFIGS {
    input_file_name: string,
    fps: number,
    resolution: RESOLUTION,
    exportType: EXPORT_TYPE,
}