import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const Input = ({label, value, handleChange, color, outLineColor}) => {
  return (
    <TextInput
      style={styles.input}
      color={color}
      outlineColor={outLineColor}
      selectionColor={color}
      placeholderTextColor="red"
      label={label}
      mode="outlined"
      value={value}
      onChangeText={text => handleChange(text)}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
  },
});
