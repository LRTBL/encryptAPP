import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image} from 'react-native';
import AppContainer from './src/app/router';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/app/store';
import Toast from 'react-native-toast-message';
import {osCloseIcon, osCheckIcon} from './src/assets';
import {STYLES_GENERAL} from './src/app/styles';

console.disableYellowBox = true;
const {store, persistor} = configureStore();

const toastConfig = {
  success: ({text1, props, ...rest}) => (
    <View style={STYLES_GENERAL.toast}>
      <View style={STYLES_GENERAL.toast__container}>
        <View>
          <Text style={STYLES_GENERAL.toast__text}>{text1}</Text>
        </View>
        <View style={STYLES_GENERAL.toast__iconContainer}>
          <Image style={STYLES_GENERAL.toast__icon} source={osCheckIcon} />
        </View>
      </View>
    </View>
  ),
  error: ({text1, props, ...rest}) => (
    <View style={STYLES_GENERAL.toast}>
      <View
        style={[
          STYLES_GENERAL.toast__container,
          STYLES_GENERAL.toast__container__red,
        ]}>
        <View>
          <Text style={STYLES_GENERAL.toast__text}>{text1}</Text>
        </View>
        <View style={STYLES_GENERAL.toast__iconContainer}>
          <Image style={STYLES_GENERAL.toast__icon} source={osCloseIcon} />
        </View>
      </View>
    </View>
  ),
  warning: ({text1, props, ...rest}) => (
    <View style={STYLES_GENERAL.toast}>
      <View
        style={[
          STYLES_GENERAL.toast__container,
          STYLES_GENERAL.toast__container__yellow,
        ]}>
        <View>
          <Text style={STYLES_GENERAL.toast__text}>{text1}</Text>
        </View>
        <View style={STYLES_GENERAL.toast__iconContainer}>
          <Image style={STYLES_GENERAL.toast__icon} source={osCloseIcon} />
        </View>
      </View>
    </View>
  ),
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
