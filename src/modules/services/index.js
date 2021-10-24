const BASE_URL = 'https://admin.lerietmall.net/v1/api/cypher';

export const serviceGetKeys = async () => {
  try {
    const response = await fetch(`${BASE_URL}/srv/file/gen_keys`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Ocurrio un error al obtener llaves');
  }
};

export const serviceGetSaveKeys = async () => {
  try {
    const response = await fetch(`${BASE_URL}/srv/file/get_keys`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Ocurrio un error al obtener llaves guardadas');
  }
};

export const servicePostSaveKeys = async ({privateKey, publicKey}) => {
  try {
    const response = await fetch(`${BASE_URL}/srv/file/store_keys`, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        private_key: privateKey,
        public_key: publicKey,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Ocurrio un error al guardar las llaves');
  }
};
