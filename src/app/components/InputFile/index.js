import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileUpload, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const InputFile = ({fileName, color, handleFile}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={handleFile}>
      <FontAwesomeIcon
        icon={fileName.length === 0 ? faFileUpload : faCheckCircle}
        color={color}
        size={45}
        style={styles.icon}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color,
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderStyle: 'dashed',
    borderRadius: 5,
  }),
  file: {
    fontSize: 13,
  },
  hiddenFile: {
    color: 'gray',
    fontSize: 13,
  },
  icon: {marginBottom: 20},
});
