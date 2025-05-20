import fs from "fs";
import { CONFIGS } from "../.custom/config";

const dir = fs.readdirSync(".custom");
const extension = RegExp(`^${CONFIGS.input_file_name}\.(mp4|mkv)$`);

export const file = dir.find(file => {
    const stats = fs.statSync(".custom/" + file);
    return stats.isFile() && extension.test(file);
});