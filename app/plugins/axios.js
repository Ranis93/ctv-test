import axios from "axios";

const api = axios.create();

api.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ERR_INVALID_URL') {
      console.warn('Invalid URL error caught');
      return Promise.resolve({ data: null, status: 400 });
    }
    return Promise.reject(error);
  }
);

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      axios: api
    }
  }
})