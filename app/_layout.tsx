import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainscreen from './mainscreen';
import quizscreen from './quizscreen';
import EndQuizScreen from './Endquiz';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="mainscreen" component={mainscreen} />
        <Stack.Screen name="quizscreen" component={quizscreen} />
        <Stack.Screen name="EndQuizScreen" component={EndQuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;