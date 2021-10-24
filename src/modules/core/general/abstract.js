import {showToast} from '../showToast';
import {SET_LOADING, SET_MODAL} from '../ui/types';
import {SET_DOWNLOAD_FILE} from './types';
import {serviceEncryptAndDecryptFile} from '../../services';
import {downloadFile} from '../../utils/downloadFile';

export const sendFileAbstract = async ({
  publicKey,
  privateKey,
  file,
  dispatch,
  typeService,
}) => {
  if (publicKey.length === 0 && privateKey.length === 0) {
    showToast({
      type: 3,
      text1: 'Falta que configure las llaves',
    });
  } else {
    const {uri, name, type} = file;
    const formData = new FormData();
    formData.append('file', {
      type,
      uri,
      name,
    });
    formData.append('type', typeService);
    dispatch({type: SET_LOADING, payload: true});
    try {
      const res = await serviceEncryptAndDecryptFile({formData});
      if (res.success) {
        downloadFile({id: res.id, name})
          .then(resp => {
            const {fileTitle, pathDownload} = resp;
            dispatch({
              type: SET_DOWNLOAD_FILE,
              payload: {id: res.id, name: fileTitle, type, pathDownload},
            });
            dispatch({type: SET_LOADING, payload: false});
            dispatch({type: SET_MODAL, payload: true});
          })
          .catch(err => showToast({type: 2, text1: err}));
      } else {
        dispatch({type: SET_LOADING, payload: false});
        showToast({type: 2, text1: res.message});
      }
    } catch (err) {
      dispatch({type: SET_LOADING, payload: false});
      showToast({type: 2, text1: err.message});
    }
  }
};
