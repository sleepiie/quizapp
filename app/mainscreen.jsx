import React from 'react';
import { View, Text, StyleSheet , SafeAreaView, Dimensions , TouchableOpacity} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Statistic Quiz App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quizscreen")}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
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
    paddingTop: 75,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    paddingBottom: screen.height*0.07,
  },
  button:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default MainScreen;
