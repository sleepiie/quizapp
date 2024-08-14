import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import questions from './question.json'; 

export default function QuizScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); 
  const [score, setScore] = useState(0);

  const [header, setHeader] = useState(questions[0].header);
  const [question, setQuestion] = useState(questions[0].question);
  const [choices, setChoices] = useState(questions[0].choices);

  const handleAnswerPress = (choice) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    setSelectedAnswer(choice);
    let updatedScore = score;
    if (choice === correctAnswer) {
      setIsCorrect(true);
      updatedScore = updatedScore + 1;
    } else {
      setIsCorrect(false);
    }
    setScore(updatedScore);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setHeader(questions[nextIndex].header);
        setQuestion(questions[nextIndex].question);
        setChoices(questions[nextIndex].choices);
        setSelectedAnswer(null); 
        setIsCorrect(null); 
      } else {
        navigation.navigate('EndQuizScreen', {
          score: updatedScore,
          totalQuestions: questions.length,
        });
      }
    }, 1000);
  };
  const getButtonOpacity = (choice) => {
    if (selectedAnswer === null) return 1; 
    return selectedAnswer === choice ? 1 : 0.4; 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:selectedAnswer === choices[0]? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer? '#22732a' : '#912f33') : '#cf362b',opacity: getButtonOpacity(choices[0])}]}
          onPress={() => handleAnswerPress(choices[0])}
        >
          <Text style={styles.buttonText}>{choices[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:selectedAnswer === choices[1]? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer? '#22732a' : '#912f33') : '#edb951',opacity: getButtonOpacity(choices[1])}]}
          onPress={() => handleAnswerPress(choices[1])}
        >
          <Text style={styles.buttonText}>{choices[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:selectedAnswer === choices[2]? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer? '#22732a' : '#912f33') : '#7fcf46',opacity: getButtonOpacity(choices[2])}]}
          onPress={() => handleAnswerPress(choices[2])}
        >
          <Text style={styles.buttonText}>{choices[2]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:selectedAnswer === choices[3]? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer? '#22732a' : '#912f33') : '#466fcf',opacity: getButtonOpacity(choices[3])}]}
          onPress={() => handleAnswerPress(choices[3])}
        >
          <Text style={styles.buttonText}>{choices[3]}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#7632ad',
    paddingTop: 10,
  },
  textContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 12,
    borderRadius: 7,
    marginTop: 40,
  },
  header: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'left',
  },
  question: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  button: {
    padding: 20,
    marginVertical: 7,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
