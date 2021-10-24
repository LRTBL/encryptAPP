import {
  SET_PRIVATE_KEY,
  SET_PUBLIC_KEY,
  SET_DECRYPTION_FILE,
  SET_ENCRYPTION_FILE,
  SET_DOWNLOAD_FILE,
} from './types';

import initialState from './initialState';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PUBLIC_KEY:
      return {
        ...state,
        publicKey: payload,
      };
    case SET_PRIVATE_KEY:
      return {
        ...state,
        privateKey: payload,
      };
    case SET_DECRYPTION_FILE:
      return {
        ...state,
        decryptFile: {...payload},
      };
    case SET_ENCRYPTION_FILE:
      return {
        ...state,
        encryptFile: {...payload},
      };
    case SET_DOWNLOAD_FILE:
      return {
        ...state,
        downloadFile: {...payload},
      };

    default:
      return state;
  }
};
