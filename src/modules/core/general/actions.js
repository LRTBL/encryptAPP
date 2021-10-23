import {
  SET_PRIVATE_KEY,
  SET_PUBLIC_KEY,
  SET_ENCRYPTION_FILE,
  SET_DECRYPTION_FILE,
} from './types';
import {postDecryptFile, postEncryptFile} from '../../services';
import {sendFileAbstract} from './abstract';
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
        showToast({type: 3, text1: 'Se cancelo la subida del sarchivo'});
      } else {
        showToast({type: 2, text1: 'Ocurrio un error'});
      }
    }
  };
};

export const actionClearEncryptFile = () => {
  return async dispatch => {
    const payload = {name: '', type: null, uri: ''};
    dispatch({type: SET_ENCRYPTION_FILE, payload});
  };
};

export const actionSendEncryptFile = () => {
  return async (dispatch, getState) => {
    const {
      general: {publicKey, privateKey, encryptFile},
    } = getState();
    await sendFileAbstract({
      dispatch,
      file: encryptFile,
      postFile: postEncryptFile,
      privateKey,
      publicKey,
    });
  };
};

// DECRYPT ACTIONS
export const actionSetDecryptFile = () => {
  return async dispatch => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      const file = res[0];
      const payload = {name: file.name, type: file.type, uri: file.uri};
      dispatch({type: SET_DECRYPTION_FILE, payload});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showToast({type: 3, text1: 'Se cancelo la subida del sarchivo'});
      } else {
        showToast({type: 2, text1: 'Ocurrio un error'});
      }
    }
  };
};

export const actionClearDecryptFile = () => {
  return async dispatch => {
    const payload = {name: '', type: null, uri: ''};
    dispatch({type: SET_DECRYPTION_FILE, payload});
  };
};

export const actionSendDecryptFile = () => {
  return async (dispatch, getState) => {
    const {
      general: {publicKey, privateKey, decryptFile},
    } = getState();
    await sendFileAbstract({
      dispatch,
      file: decryptFile,
      postFile: postDecryptFile,
      privateKey,
      publicKey,
    });
  };
};

export const actionShareFile = () => {
  return async (dispatch, getState) => {
    console.log('SHARE');
  };
};
