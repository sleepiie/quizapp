import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Question} from './txtfile/questionapp'
import { FlatList } from 'react-native-gesture-handler';

const MainScreen = () => {
  const [fileContent, setFileContent] = useState('');

  const setQuestion = async () => {
    const content = Question('question.txt'); // Await the promise and get the result
    console.log(content); // Log the content to the console
    setFileContent(content);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Button
        title='press'
        onPress={setQuestion}
      />
      <FlatList
        data={fileContent}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainScreen;
