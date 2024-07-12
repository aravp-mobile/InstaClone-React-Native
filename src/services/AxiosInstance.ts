import axios from 'axios';

const baseURL = 'https://gurushalanewstg.appinventive.com/api/v1/';
const instance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
});

export default instance;