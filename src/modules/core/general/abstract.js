import {showToast} from '../showToast';
import {SET_LOADING} from '../ui/types';

export const sendFileAbstract = async ({
  publicKey,
  privateKey,
  file,
  dispatch,
  postFile,
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
    formData.append('type', 'encrypt');
    dispatch({type: SET_LOADING, payload: true});
    try {
      // console.log(uri, name, type);
      // console.log(privateKey, publicKey);
      fetch('https://admin.lerietmall.net/v1/api/cypher/file', {
        method: 'POST',
        body: formData,
        headers: {},
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(console.log);
      // const res = await postFile({formData, privateKey, publicKey});
      showToast({type: 1, text1: 'Se descargo el archivo encriptado'});
    } catch (err) {
      console.log('error');
      showToast({type: 2, text1: err.message});
    }
    dispatch({type: SET_LOADING, payload: false});
  }
};
