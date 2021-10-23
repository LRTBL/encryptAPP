import React from 'react';
import {Text, StyleSheet, Image, Animated, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {encryptedIcon} from '../../../assets';

const SplashScreen = () => {
  const anim = React.useRef(new Animated.Value(1));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.app}>
      <Animated.View style={{transform: [{scale: anim.current}]}}>
        <View style={styles.container}>
          <Image source={encryptedIcon} style={styles.image} />
          <Text style={styles.text}>AES Encryption</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  app: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Helvetica Neue',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
