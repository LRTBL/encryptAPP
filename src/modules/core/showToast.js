import Toast from 'react-native-toast-message';
import {Dimensions} from 'react-native';

const types = {
  1: 'success',
  2: 'error',
  3: 'warning',
};

export const showToast = ({type, text1}) => {
  Toast.show({
    type: types[type],
    text1,
    position: 'bottom',
    bottomOffset: Dimensions.get('screen').height * 0.12,
  });
};
