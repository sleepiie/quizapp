

var RNFS = require('react-native-fs');
import { Dirs,FileSystem } from 'react-native-file-access';
const readFile_ = async (fileName) => {
    try {
      // const filePath = RNFS.DocumentDirectoryPath + `/${fileName}`;
      const content =  await FileSystem.readFile(Dirs.CacheDir + `/${fileName}`);
      return content;
    } catch (error) {
      console.error("Error reading file:", error);
      return null;
    }
  };

//rename this function
export function Question(){
    const fileContent = readFile_('question.txt')
    return (
        fileContent
    )

};