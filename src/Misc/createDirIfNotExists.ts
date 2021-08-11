import { mkdirSync, existsSync, PathLike } from "fs";
/**
 * Create a directory if it does not already exist.
 * @param {PathLike} dir Directory.  
 * @returns {void}
 * @example createDirIfNotExists('directory name')
 */
export default function (dir: PathLike): void {
  return (!existsSync(dir) ? mkdirSync(dir) : undefined);
}