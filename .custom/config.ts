export const CONFIGS: CONFIGS = {
    // input file name (exclude extension)
    input_file_name: "input",
    // fps
    fps: 15,
    // resolution
    resolution: "1280x720",
    // export type
    exportType: "jpg",
    // quality scale
    quality: 1
}

// type
interface CONFIGS {
    input_file_name: string,
    fps: number,
    resolution: RESOLUTION,
    exportType: EXPORT_TYPE,
    quality: QUALITY
}

type RESOLUTION = "1920x1080" | "1280x720"
type EXPORT_TYPE = "jpg" | "png"
type QUALITY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
    11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 |
    22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 |
    33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 |
    44 | 45 | 46 | 47 | 48 | 49 | 50 | 51;