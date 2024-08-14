import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { parseQuestionFile } from './logic';

export default function QuizScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const loadQuestions = async () => {
      const parsedQuestions = await parseQuestionFile();
      setQuestions(parsedQuestions);
    };
    loadQuestions();
  }, []);

  const handleAnswerPress = (choiceIndex) => {
    const correctAnswerIndex = questions[currentQuestionIndex].answer;
    let updatedScore = score;
    if (choiceIndex === correctAnswerIndex) {
      updatedScore = score + 1;
    } else {
      updatedScore = score;
    }

    setSelectedAnswer(choiceIndex);
    setScore(updatedScore);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigation.navigate('EndQuizScreen', {
          score: updatedScore,
          totalQuestions: questions.length,
        });
      }
    }, 1000);
  };

  if (questions.length === 0) return null; // ถ้ายังไม่ได้โหลดคำถามให้แสดงหน้าจอว่างเปล่า

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{currentQuestion.header}</Text>
        <Text style={styles.question}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {currentQuestion.choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedAnswer === index
                    ? index === currentQuestion.answer
                      ? '#22732a'
                      : '#912f33'
                    : ['#cf362b', '#edb951', '#7fcf46', '#466fcf'][index],
                opacity: selectedAnswer === null || selectedAnswer === index ? 1 : 0.4,
              },
            ]}
            onPress={() => handleAnswerPress(index)}
          >
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
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
