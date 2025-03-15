import fs from "fs";
import config from "../config/index.js";

export default class LocalFileHandler {
 
  static changeFileName = async (fileName, fileExt, profileId) => {
    const oldPath = `${config.getDownloadPath()}/${fileName}.${fileExt}`;
    const newFileName = `${fileName}_${profileId}.${fileExt}`;
    const newPath = `${config.getDownloadPath()}/${newFileName}`;

    fs.rename(oldPath, newPath, (error) => {
      if (error) throw error;
    });

    return newFileName;
  };

  static deleteDownloadedFile = async (fileName) => {
    fs.unlinkSync(`${config.getDownloadPath()}/${fileName}`);
  };
}
