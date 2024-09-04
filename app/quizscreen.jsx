import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { parseQuestionFile } from './logic';
import * as Speech from 'expo-speech';

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

  const detectLanguage = (text) => {
    const thaiPattern = /[\u0E00-\u0E7F]/;
    return thaiPattern.test(text) ? 'th' : 'en';
  };

  const speak = () => {
    if (currentQuestion) {
      const language = detectLanguage(currentQuestion.question);
      const choicesLanguage = currentQuestion.choices.map((choice) => detectLanguage(choice));
      const options = {
        pitch: 1,
        rate: 1.05,
        language: language === 'th' ? 'th-TH' : 'en-US',
        voice: language === 'th' ? 'com.apple.voice.compact.th-TH.Kanya' : 'com.apple.ttsbundle.Samantha-compact',
      };
      const choicesOptions = choicesLanguage.map((choiceLanguage) => ({
        pitch: 1,
        rate: 1.05,
        language: choiceLanguage === 'th' ? 'th-TH' : 'en-US',
        voice: choiceLanguage === 'th' ? 'com.apple.voice.compact.th-TH.Kanya' : 'com.apple.ttsbundle.Samantha-compact',
      }));

      if (currentQuestion.header) {
        Speech.speak(currentQuestion.header, options);
      }
      Speech.speak(currentQuestion.question, options);
      currentQuestion.choices.forEach((choice, index) => {
        Speech.speak(`ตัวเลือกที่ ${index + 1}`, options);
        Speech.speak(choice,choicesOptions[index]);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{currentQuestion.header}</Text>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        <TouchableOpacity style={styles.speakButton} onPress={speak}>
          <Text style={styles.speakButtonText}>🔊</Text>
        </TouchableOpacity>
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
  speakButton: {
    padding: 10,
    backgroundColor: '#4682B4',
    borderRadius: 7,
    alignSelf: 'center',
  },
  speakButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
