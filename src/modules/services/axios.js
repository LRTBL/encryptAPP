import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://admin.lerietmall.net/v1/api/cypher',
});

axios.defaults.headers.post['Content-type'] = 'application/json';

export default instance;
