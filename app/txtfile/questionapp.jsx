

var RNFS = require('react-native-fs');
import {readDirGeneric} from 'react-native-fs';

const readFile_ = async (fileName) => {
    try {
      const filePath = RNFS.DocumentDirectoryPath + `/${fileName}`;
      const content =  await RNFS.readFile(filePath, 'utf8');
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