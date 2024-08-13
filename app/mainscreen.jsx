import React from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';
import { Question } from './txtfile/questionapp'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!sdfkjshfkjshfkj</Text>
      <Button
        title="Press me"
        onPress={() => Question('question.txt')}
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
