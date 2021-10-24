import {
  SET_PRIVATE_KEY,
  SET_PUBLIC_KEY,
  SET_ENCRYPTION_FILE,
  SET_DECRYPTION_FILE,
} from './types';
import {SET_LOADING, SET_LOADING_SPLASH} from '../ui/types';
import {
  serviceGetKeys,
  serviceGetSaveKeys,
  servicePostSaveKeys,
} from '../../services';
import {handleShare} from '../../utils/shareFile';
import {handleMime} from '../../utils/mimeType';
import {sendFileAbstract} from './abstract';
import DocumentPicker from 'react-native-document-picker';
import {showToast} from '../showToast';

// KEY ACTIONS

export const actionGenerateKeys = () => {
  return async dispatch => {
    dispatch({type: SET_LOADING, payload: true});
    try {
      const res = await serviceGetKeys();
      dispatch({type: SET_PRIVATE_KEY, payload: res.private_key});
      dispatch({type: SET_PUBLIC_KEY, payload: res.public_key});
      showToast({type: 1, text1: 'Se generaron las llaves'});
    } catch (err) {
      showToast({type: 2, text1: err.message});
    }
    dispatch({type: SET_LOADING, payload: false});
  };
};

export const actionGetSaveKeys = splash => {
  return async dispatch => {
    const typeAction = splash ? SET_LOADING_SPLASH : SET_LOADING;
    dispatch({type: typeAction, payload: true});
    try {
      const res = await serviceGetSaveKeys();
      if (res.success) {
        const privateKey = res.keys.find(e => e.type === 'private');
        const publicKey = res.keys.find(e => e.type === 'public');
        dispatch({type: SET_PRIVATE_KEY, payload: privateKey.key});
        dispatch({type: SET_PUBLIC_KEY, payload: publicKey.key});
        !splash &&
          showToast({type: 1, text1: 'Se obtuvieron las llaves almacenadas'});
      } else {
        showToast({type: 2, text1: res.message});
      }
    } catch (err) {
      showToast({type: 2, text1: err.message});
    }
    dispatch({type: typeAction, payload: false});
  };
};

export const actionSaveKeys = () => {
  return async (dispatch, getState) => {
    dispatch({type: SET_LOADING, payload: true});
    try {
      const {
        general: {privateKey, publicKey},
      } = getState();
      const res = await servicePostSaveKeys({privateKey, publicKey});
      if (res.success) {
        showToast({type: 1, text1: res.message});
      } else {
        showToast({type: 2, text1: 'Ocurrio un error al guardar llaves'});
      }
    } catch (err) {
      showToast({type: 2, text1: err.message});
    }
    dispatch({type: SET_LOADING, payload: false});
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
      typeService: 'encrypt',
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
      typeService: 'decrypt',
      privateKey,
      publicKey,
    });
  };
};

export const actionShareFile = () => {
  return (dispatch, getState) => {
    const {
      general: {
        downloadFile: {pathDownload},
      },
    } = getState();
    const mimeType = handleMime(pathDownload);
    console.log(mimeType);
    handleShare({mimeType, pathDownload});
  };
};
