import axios from 'axios';
const instance = axios.create({ baseURL: 'https://burger-king-b9471.firebaseio.com' });

export default instance;
