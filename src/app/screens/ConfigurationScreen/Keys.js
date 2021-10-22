import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {STYLES_GENERAL, COLORS} from '../../styles';
import {Input, Button} from '../../components';
import {
  actionSetPrivateKey,
  actionSetPublicKey,
  actionClearKeys,
} from '../../../modules/core/general/actions';

const Keys = props => {
  const {privateKey, publicKey} = props;
  const {
    actionSetPrivateKey: setPrivateKey,
    actionSetPublicKey: setPublicKey,
    actionClearKeys: clearKeys,
  } = props;

  return (
    <ScrollView style={STYLES_GENERAL.container}>
      <Input
        label="Llave privada"
        color={COLORS.purple}
        value={privateKey}
        handleChange={setPrivateKey}
        outLineColor={COLORS.lightPurple}
      />
      <Input
        label="Llave publica"
        color={COLORS.purple}
        value={publicKey}
        handleChange={setPublicKey}
        outLineColor={COLORS.lightPurple}
      />
      <Button
        text="LIMPIAR LLAVES"
        color={COLORS.purple}
        handlePress={clearKeys}
        disabled={privateKey.length === 0 && publicKey.length === 0}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  privateKey: state.general.privateKey,
  publicKey: state.general.publicKey,
});

export default connect(mapStateToProps, {
  actionSetPrivateKey,
  actionSetPublicKey,
  actionClearKeys,
})(Keys);
