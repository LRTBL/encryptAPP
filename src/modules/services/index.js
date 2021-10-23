import axios from './axios';

export const postEncryptFile = async ({formData, publicKey, privateKey}) => {
  try {
    console.log(formData);
    const response = await axios({
      url: '/file',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      data: {formData},
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    console.log('lol');
    throw new Error('Error al mandar a encriptar archivo');
  }
};

export const postDecryptFile = async ({formData, publicKey, privateKey}) => {
  try {
    const response = await axios({
      url: '/',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      data: formData,
    });
    return response.data;
  } catch (err) {
    throw new Error('Error al mandar a desencriptar archivo');
  }
};
