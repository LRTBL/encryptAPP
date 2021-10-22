import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  actionSetEncryptFile,
  actionClearEncryptFile,
} from '../../../modules/core/general/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader, Button, InputFile} from '../../components';
import {STYLES_GENERAL, COLORS} from '../../styles';

const EncryptionScreen = ({
  fileName,
  actionSetEncryptFile: setEncryptFile,
  actionClearEncryptFile: clearEncryptFile,
}) => {
  return (
    <SafeAreaView>
      <ScrollView style={STYLES_GENERAL.container}>
        <InputFile
          fileName={fileName}
          color={COLORS.green}
          handleFile={setEncryptFile}
        />
        <Button
          text="ELIMINAR ARCHIVO"
          color={COLORS.lightGreen}
          disabled={fileName.length === 0}
          handlePress={clearEncryptFile}
        />
        <Button
          text="ENCRIPTAR ARCHIVO"
          color={COLORS.green}
          disabled={fileName.length === 0}
          // handlePress={handleEncrypt}
        />
      </ScrollView>
      <Loader color={COLORS.green} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  fileName: state.general.encryptFile.name,
});

export default connect(mapStateToProps, {
  actionSetEncryptFile,
  actionClearEncryptFile,
})(EncryptionScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
