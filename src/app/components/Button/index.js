import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const ButtonGeneral = ({text, handlePress, color, disabled}) => {
  return (
    <Button
      contentStyle={styles.contentStyle}
      style={styles.button}
      mode="contained"
      disabled={disabled}
      color={color}
      onPress={handlePress}>
      {text}
    </Button>
  );
};

export default ButtonGeneral;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
