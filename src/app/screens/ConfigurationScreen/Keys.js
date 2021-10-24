import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../styles';
import {Input, Button} from '../../components';
import {
  actionGenerateKeys,
  actionSaveKeys,
  actionGetSaveKeys,
} from '../../../modules/core/general/actions';

const Keys = props => {
  const {privateKey, publicKey} = props;
  const {
    actionGenerateKeys: generateKeys,
    actionSaveKeys: saveKeys,
    actionGetSaveKeys: getSaveKeys,
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={styles.keys}
          onPress={() => getSaveKeys(false)}>
          <FontAwesomeIcon icon={faKey} color={COLORS.purple} size={40} />
          <Text style={styles.title__key}>Obtener llaves almacenadas</Text>
        </TouchableOpacity>
        <Input
          label="Llave privada"
          color={COLORS.purple}
          value={privateKey}
          outLineColor={COLORS.lightPurple}
        />
        <Input
          label="Llave publica"
          color={COLORS.purple}
          value={publicKey}
          outLineColor={COLORS.lightPurple}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button
          text="GENERAR NUEVAS LLAVES"
          color={COLORS.purple}
          handlePress={generateKeys}
        />
        <Button
          text="ALMACENAR LLAVES"
          color={COLORS.purple}
          handlePress={saveKeys}
          disabled={privateKey.length === 0 && publicKey.length === 0}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  privateKey: state.general.privateKey,
  publicKey: state.general.publicKey,
});

export default connect(mapStateToProps, {
  actionGenerateKeys,
  actionSaveKeys,
  actionGetSaveKeys,
})(Keys);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  keys: {
    alignItems: 'center',
  },
  title__key: {
    color: COLORS.purple,
    marginTop: 5,
    marginBottom: 10,
  },
  scroll: {paddingHorizontal: 20, paddingTop: 20},
  footer: {height: '30%', paddingHorizontal: 20},
});
