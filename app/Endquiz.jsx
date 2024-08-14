import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function EndQuizScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz Completed!</Text>
      <Text style={styles.score}>Your Score: {score} / {totalQuestions}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('mainscreen')}
      >
        <Text style={styles.buttonText}>Back to Main Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7632ad',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
    color:'white',
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
