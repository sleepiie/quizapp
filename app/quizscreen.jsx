import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import Row from '@/components/row';

export default function QuizScreen({navigation}) {
  const[header, setHeader] = useState('Header Placeholder');
  //รับจาก Tag <H:> | string
  const[question, setQuestion] = useState('Question Placeholder');
  //รับจาก Tag <Q:> | string
  const[choice, setChoice] = useState(['choice1', 'choice2', 'choice3', 'choice4', 'ans']);
  //รับจาก Tag <A:> | array

  return(
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <Text style={style.header}>{header}</Text>
        <Text style={style.question}>{question}</Text>
        <Row>
          <Button text={choice[0]} color='#c92222' press={null} size="normal"/>
          <Button text={choice[1]} color='#e3dc19' press={null} size="normal"/>
        </Row>
        <Row>
        <Button text={choice[2]} color='#33d12e' press={null} size="normal"/>
        <Button text={choice[3]} color='#111ba8' press={null} size="normal"/>
        </Row>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header: {
    color: "black",
    fontSize: 25,
    fontWeight: 'bold',
  },
  question: {
    color: 'black',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#7632ad',
    paddingTop: 10,
  },
})
