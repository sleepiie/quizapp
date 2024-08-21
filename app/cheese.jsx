import { Asset } from 'expo-asset';

export const parseQuestionFile = async () => {
  const asset = Asset.fromModule(require('./txtfile/question.txt'));
  await asset.downloadAsync();

  const fileUri = asset.localUri || asset.uri;

  const response = await fetch(fileUri);
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');

  let questions = [];
  let currentQuestion = {};

  
  lines.forEach((line) => {
    console.log(line.length);
    if (line.startsWith('$H:')) {
      if (currentQuestion.question) {
        questions.push(currentQuestion);
      }
      currentQuestion = {
        header: line.substring(3, line.length - 2).trim(),
      };
    } else if (line.startsWith('$Q:')) {
      currentQuestion.question = line.substring(3, line.length - 2).trim();
    } else if (line.startsWith('$A:')) {
      const parts = line.substring(3, line.length - 1).split('|');
      currentQuestion.choices = parts.slice(0, -1);
      currentQuestion.answer = parseInt(parts[parts.length - 1], 10) - 1;
    }
  });

  if (currentQuestion.question) {
    questions.push(currentQuestion);
  }
  console.log(questions);
  return questions;
};
