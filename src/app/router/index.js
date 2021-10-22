import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {faCogs, faUnlock, faLock} from '@fortawesome/free-solid-svg-icons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from '../styles';

import {
  ConfiguratioScreen,
  DecryptionScreen,
  EncryptionScreen,
  SplashScreen,
} from '../screens';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
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

export default App;
