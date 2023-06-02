// api.js
import Axios from 'axios';
import Cookies from 'js-cookie';

const urls = {
  test: `http://localhost:3000`,
  development: 'https://api-prod.hello-ielts.com/',
  production: 'https://api-prod.hello-ielts.com/',
};
const bearToken = Cookies.get('token');
const config = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  } as any;
  if (bearToken) {
    headers.Authorization = `Bearer ${bearToken}`;
  }
  return headers;
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: config(),
});

api.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
