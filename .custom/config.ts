export const CONFIGS: CONFIGS = {
    input_file_name: "input",
    fps: 15,
    resolution: "1280x720",
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