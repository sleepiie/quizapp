import React from 'react';
import { View, Text, StyleSheet , SafeAreaView, Dimensions} from 'react-native';
import Button from '../components/Button'

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Statistic Quiz App</Text>
        <Button text="Start Quiz" size="menu" color='white' press={() => navigation.navigate("quizscreen")}/>
      </View>
    </SafeAreaView>
  );
};

const screen = Dimensions.get("window");
const toPad = screen.height*3/10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#7632ad',
    paddingTop: toPad,
  },
  view: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#7632ad',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    paddingBottom: screen.height*0.07,
  },
});

export default MainScreen;
