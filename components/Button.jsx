import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ press, text, size = "normal", color = "white" }) => {
  const textColor = (color === "white") ? styles.text : styles.textWithBG;
  const buttonSize = (size === "normal") ? styles.button : styles.menuButton;

  return (
    <TouchableOpacity onPress={press} style={[buttonSize, {backgroundColor: color}]}>
      <Text style={textColor}>{text}</Text>
    </TouchableOpacity>  
  );
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 2;
const menuButtonWidth = screen.width * 3 / 5;

const styles = StyleSheet.create({
  button: {
    width: Math.floor(buttonWidth*0.9),
    height: Math.floor(screen.height*0.375),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth * 0.1),
    margin: 5,
  },
  menuButton: {
    width: menuButtonWidth,
    height: Math.floor(menuButtonWidth * 0.1),
    borderRadius: Math.floor(menuButtonWidth * 0.035),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textWithBG: {
    color: 'white',
    fontSize: 24, // Ensure text is visible
  },
});

export default Button;
