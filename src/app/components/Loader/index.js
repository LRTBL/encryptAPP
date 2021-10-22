import React from 'react';
import {View, Image, Modal, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {loaderGif} from '../../../assets';

const Loader = ({loading, color}) => {
  return (
    <Modal transparent visible={loading}>
      <View style={styles.container}>
        <View style={styles.loader(color)}>
          <Image source={loaderGif} style={styles.gif} />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => ({
  loading: state.ui.loading,
});

export default connect(mapStateToProps, null)(Loader);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 20,
  }),
  gif: {
    width: 200,
    height: 200,
  },
});
