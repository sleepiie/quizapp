// const fs = require('fs')
// fs.readFile('question.txt', (err, inputD) => {
//    if (err) throw err;
//       console.log(inputD.toString());
// });
import React, { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { View, Text} from 'react-native';

const readFile = async (fileName) => {
    try {
      const filePath = RNFS.DocumentDirectoryPath + `/${fileName}`;
      const content = await RNFS.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      console.error("Error reading file:", error);
      return null;
    }
  };

//rename this function
export function Question(){
    const fileContent = readFile('question.txt')
    return (
        <View>
        <Text>{fileContent}</Text>
        </View>
    )

};
