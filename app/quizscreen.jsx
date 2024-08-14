import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import Row from '@/components/row';
import questions from './question.json'; // Adjust the path as needed

export default function QuizScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // To store whether the answer is correct

  // Initialize state with the first question
  const [header, setHeader] = useState(questions[0].header);
  const [question, setQuestion] = useState(questions[0].question);
  const [choices, setChoices] = useState(questions[0].choices);

  const handleAnswerPress = (choice) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    setSelectedAnswer(choice);

    // Check if the selected answer is correct
    if (choice === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setHeader(questions[nextIndex].header);
        setQuestion(questions[nextIndex].question);
        setChoices(questions[nextIndex].choices);
        setSelectedAnswer(null); // Reset selected answer
        setIsCorrect(null); // Reset correctness indicator
      } else {
        // Handle quiz completion (navigate to a different screen or show a completion message)
        console.log('Quiz completed!');
        navigation.navigate("mainscreen"); // Replace with your completion logic
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <Text style={style.header}>{header}</Text>
        <Text style={style.question}>{question}</Text>
        <Row>
          <Button
            text={choices[0]}
            color={selectedAnswer === choices[0] ? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer ? '#22732a' : '#912f33') : '#cf362b'}
            press={() => handleAnswerPress(choices[0])}
            size="normal"
          />
          <Button
            text={choices[1]}
            color={selectedAnswer === choices[1] ? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer ? '#22732a' : '#912f33') : '#f5b649'}
            press={() => handleAnswerPress(choices[1])}
            size="normal"
          />
        </Row>
        <Row>
          <Button
            text={choices[2]}
            color={selectedAnswer === choices[2] ? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer ? '#22732a' : '#912f33') : '#65ab33'}
            press={() => handleAnswerPress(choices[2])}
            size="normal"
          />
          <Button
            text={choices[3]}
            color={selectedAnswer === choices[3] ? (isCorrect && selectedAnswer === questions[currentQuestionIndex].answer ? '#22732a' : '#912f33') : '#3c72c2'}
            press={() => handleAnswerPress(choices[3])}
            size="normal"
          />
        </Row>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  question: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#7632ad',
    paddingTop: 10,
  },
});
