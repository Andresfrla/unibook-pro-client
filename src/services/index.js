import axios from 'axios';

console.log("Environment:", process.env.REACT_APP_ENV);
console.log("Server URL:", process.env.REACT_APP_SERVER_URL);

let baseUrl = process.env.REACT_APP_ENV === 'production'
    ? process.env.REACT_APP_SERVER_URL
    : 'http://localhost:5005';


const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000
})

service.interceptors.request.use((config) => {

    const storedToken = localStorage.getItem('authToken')
    if(storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}`}
    }
    return config
})

axios.interceptors.response.use(
    response => response,
    error => {
        console.error('error: ', error);
      if (error.response.status === 401) {
        window.location.href = '/';
      }
    }
  );

export default service;