import React from 'react';
import {Text, Pressable} from 'react-native';
import {ButtonProps} from '../types';
import styles from './styles';

const Button = ({textStyle, buttonStyle, onPress, title}: ButtonProps) => {
  return (
    <Pressable style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
