import {StyleSheet} from 'react-native';

export const COLORS = {
  purple: '#5B37B7',
  lightPurple: 'rgba(223,215,243,1)',
  red: '#800123',
  lightRed: 'rgba(251,184,202,0.8)',
  green: '#1194AA',
  lightGreen: 'rgba(207,235,239,1)',
};
export const STYLES_GENERAL = StyleSheet.create({
  app: {flex: 1},
  container: {
    height: '100%',
    paddingTop: 30,
    marginHorizontal: 30,
  },
  toast: {
    height: 70,
    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  toast__container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#58c25d',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 21,
    flexDirection: 'row',
  },
  toast__container__red: {
    backgroundColor: '#ff5e5e',
  },
  toast__container__yellow: {
    backgroundColor: '#ffc323',
  },
  toast__text: {
    fontSize: 15,
    color: 'white',
  },
  toast__iconContainer: {
    width: 30,
  },
  toast__icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: 'white',
  },
});
