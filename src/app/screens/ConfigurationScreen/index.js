import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {STYLES_GENERAL, COLORS} from '../../styles';
import {Loader} from '../../components';
import Develop from './Depelop';
import Keys from './Keys';
const ConfigurationScreen = () => {
  const [stateTab, setStateTab] = React.useState(0);
  return (
    <SafeAreaView styles={STYLES_GENERAL.app}>
      <View style={styles.headerTap}>
        <TouchableOpacity
          style={styles.tab(stateTab, 0)}
          onPress={() => setStateTab(0)}>
          <Text style={styles.tabText}> LLAVES </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab(stateTab, 1)}
          onPress={() => setStateTab(1)}>
          <Text style={styles.tabText}> DESARROLLADO POR</Text>
        </TouchableOpacity>
      </View>
      {stateTab === 0 ? <Keys /> : <Develop />}
      <Loader />
    </SafeAreaView>
  );
};

export default ConfigurationScreen;

const styles = StyleSheet.create({
  headerTap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: (stateTab, actual) => ({
    width: '50%',
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomColor: stateTab === actual ? COLORS.purple : COLORS.lightPurple,
    borderBottomWidth: 5,
  }),
  tabText: {
    fontSize: 12,
  },
});
