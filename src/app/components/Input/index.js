import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const Input = ({label, value, color, outLineColor}) => {
  return (
    <TextInput
      style={styles.input}
      multiline
      disabled
      color={color}
      outlineColor={outLineColor}
      selectionColor={color}
      label={label}
      mode="outlined"
      value={value}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
  },
});
