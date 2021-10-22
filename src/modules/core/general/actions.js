import {SET_PRIVATE_KEY, SET_PUBLIC_KEY, SET_ENCRYPTION_FILE} from './types';
import {SET_LOADING} from '../ui/types';
import DocumentPicker from 'react-native-document-picker';

import {showToast} from '../showToast';

// KEY ACTIONS
export const actionSetPrivateKey = text => ({
  type: SET_PRIVATE_KEY,
  payload: text,
});

export const actionSetPublicKey = text => ({
  type: SET_PUBLIC_KEY,
  payload: text,
});

export const actionClearKeys = () => {
  return dispatch => {
    dispatch({type: SET_PRIVATE_KEY, payload: ''});
    dispatch({type: SET_PUBLIC_KEY, payload: ''});
    showToast({type: 1, text1: 'Las llaves se elimaron'});
  };
};

// ENCRYPT ACTIONS
export const actionSetEncryptFile = () => {
  return async dispatch => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      const file = res[0];
      const payload = {name: file.name, type: file.type, uri: file.uri};
      dispatch({type: SET_ENCRYPTION_FILE, payload});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showToast({type: 3, text1: 'No se subio un archivo'});
      } else {
        showToast({type: 2, text1: 'Ocurrio un error'});
      }
    }
  };
};

export const actionClearEncryptFile = () => {
  return async dispatch => {
    const payload = {name: '', type: null, uri: ''};
    dispatch({type: SET_LOADING, payload: true});
    dispatch({type: SET_ENCRYPTION_FILE, payload});
    // dispatch({type: SET_LOADING, payload: false});
  };
};

export const actionSendEncryptFile = () => {
  return async dispatch => {
    const payload = {name: '', type: null, uri: ''};
    dispatch({type: SET_LOADING, payload: true});
    dispatch({type: SET_ENCRYPTION_FILE, payload});
    // dispatch({type: SET_LOADING, payload: false});
  };
};
