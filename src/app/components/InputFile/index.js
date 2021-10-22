import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const InputFile = ({fileName, color, handleFile}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={handleFile}>
      {fileName.length === 0 ? (
        <Text style={styles.hiddenFile}>Subir archivo</Text>
      ) : (
        <Text style={styles.file} ellipsizeMode="tail" numberOfLines={1}>
          {fileName}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default InputFile;

const styles = StyleSheet.create({
  container: color => ({
    marginVertical: 10,
    borderColor: color,
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  }),
  file: {
    fontSize: 15,
  },
  hiddenFile: {
    color: 'gray',
    fontSize: 15,
  },
});
