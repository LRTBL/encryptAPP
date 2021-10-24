import Toast from 'react-native-toast-message';

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
    bottomOffset: 60,
  });
};
