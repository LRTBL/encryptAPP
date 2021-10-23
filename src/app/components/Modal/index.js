import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {actionHiddeModal} from '../../../modules/core/ui/actions';
import {actionShareFile} from '../../../modules/core/general/actions';

const ModalCustom = ({
  modal,
  color,
  buttonColor,
  fileName,
  actionHiddeModal: hiddeModal,
  actionShareFile: shareFile,
}) => {
  return (
    <Modal transparent visible={modal}>
      <View style={styles.container}>
        <View style={styles.loader(color)}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Se descargo exitosamente el archivo! 🥳
            </Text>
            <Text style={styles.fileName} numberOfLines={1}>
              {fileName}
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.ok} onPress={hiddeModal}>
              <Text>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.share(buttonColor)}
              onPress={shareFile}>
              <Text>COMPARTIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

export default connect(mapStateToProps, {actionShareFile, actionHiddeModal})(
  ModalCustom,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: color => ({
    backgroundColor: color,
    borderRadius: 15,
    paddingTop: 10,
    width: '85%',
  }),
  header: {padding: 15, alignItems: 'center'},
  title: {color: 'white', fontSize: 15, marginBottom: 5},
  fileName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  gif: {
    width: 150,
    height: 150,
  },
  footer: {
    flexDirection: 'row',
  },
  ok: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '50%',
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
  },
  share: buttonColor => ({
    alignItems: 'center',
    backgroundColor: buttonColor,
    width: '50%',
    borderBottomRightRadius: 15,
    paddingVertical: 10,
  }),
});
