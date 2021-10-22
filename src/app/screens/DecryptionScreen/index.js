import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  actionSetDecryptFile,
  actionClearDecryptFile,
  actionSendDecryptFile,
} from '../../../modules/core/general/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader, Button, InputFile} from '../../components';
import {STYLES_GENERAL, COLORS} from '../../styles';

const DecryptionScreen = ({
  fileName,
  actionSetDecryptFile: setDecryptFile,
  actionClearDecryptFile: clearDecryptFile,
  actionSendDecryptFile: sendDecryptFile,
}) => {
  return (
    <SafeAreaView>
      <ScrollView style={STYLES_GENERAL.container}>
        <InputFile
          fileName={fileName}
          color={COLORS.red}
          handleFile={setDecryptFile}
        />
        <Button
          text="ELIMINAR"
          color={COLORS.lightRed}
          disabled={fileName.length === 0}
          handlePress={clearDecryptFile}
        />
        <Button
          text="DESENCRIPTAR"
          color={COLORS.red}
          disabled={fileName.length === 0}
          handlePress={sendDecryptFile}
        />
      </ScrollView>
      <Loader color={COLORS.red} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  fileName: state.general.decryptFile.name,
});

export default connect(mapStateToProps, {
  actionSetDecryptFile,
  actionClearDecryptFile,
  actionSendDecryptFile,
})(DecryptionScreen);
