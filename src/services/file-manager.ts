import { createWriteStream, existsSync, mkdirSync } from 'fs';

export const save = async (
  binaryStream: any,
  path: string,
  filename: string
) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
  console.log(path + filename);
  return binaryStream.pipe(createWriteStream(path + filename));
};
