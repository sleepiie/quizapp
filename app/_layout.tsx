import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainscreen from './mainscreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="mainscreeen" component={mainscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;