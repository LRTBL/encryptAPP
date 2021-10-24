import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCogs, faUnlock, faLock} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from '../styles';

import {
  ConfiguratioScreen,
  DecryptionScreen,
  EncryptionScreen,
  SplashScreen,
} from '../screens';

import {actionGetSaveKeys} from '../../modules/core/general/actions';

const Tab = createMaterialBottomTabNavigator();

const App = ({actionGetSaveKeys: getSaveKeys, loadingSplash}) => {
  React.useEffect(() => {
    getSaveKeys(true);
  }, [getSaveKeys]);

  if (loadingSplash) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Configuración"
          shifting
          inactiveColor="white"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconRes;
              if (route.name === 'Encriptar') {
                iconRes = faLock;
              } else if (route.name === 'Desencriptar') {
                iconRes = faUnlock;
              } else {
                iconRes = faCogs;
              }
              return (
                <FontAwesomeIcon
                  icon={iconRes}
                  color={color}
                  size={focused ? 20 : size}
                />
              );
            },
          })}>
          <Tab.Screen
            name="Encriptar"
            component={EncryptionScreen}
            options={({route}) => ({
              tabBarColor: COLORS.green,
            })}
          />
          <Tab.Screen
            name="Desencriptar"
            component={DecryptionScreen}
            options={({route}) => ({
              tabBarColor: COLORS.red,
            })}
          />
          <Tab.Screen
            name="Configuración"
            component={ConfiguratioScreen}
            options={({route}) => ({
              tabBarColor: COLORS.purple,
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = state => ({
  loadingSplash: state.ui.loadingSplash,
});

export default connect(mapStateToProps, {actionGetSaveKeys})(App);
