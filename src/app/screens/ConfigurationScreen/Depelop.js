import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {uscmIcon} from '../../../assets';

const Depelop = () => {
  return (
    <View style={styles.conatainer}>
      <Image source={uscmIcon} style={styles.ucsm} />
      <Text>Desarrollado por: {'\n'}</Text>
      <Text style={styles.text}>
        Alvarez Tinajeros Gianella Nahomi {'\n'}
        Berrios Zuniga Alvaro Daniel {'\n'}
        Chullo Mamani Fernando Mahiler {'\n'}
        Valdivia Navarrete Benjamin Andre {'\n'}
        {'\n'}
        {'\n'}
      </Text>
      <Text> Arequipa - Perú </Text>
      <Text> 2021</Text>
      <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
    </View>
  );
};

export default Depelop;

const styles = StyleSheet.create({
  conatainer: {alignItems: 'center', marginTop: 40, height: '100%'},
  ucsm: {marginBottom: 20},
  text: {fontWeight: 'bold', textAlign: 'center'},
});
