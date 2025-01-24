import axios from 'axios';

const BASE_URL = 'https://api.mail.tm';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Retry logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    
    if (!config || !config.retry) {
      config.retry = 0;
    }

    if (config.retry >= 3) {
      return Promise.reject(error);
    }

    config.retry += 1;
    const delay = Math.min(1000 * (2 ** config.retry), 10000);
    
    await new Promise(resolve => setTimeout(resolve, delay));
    return api(config);
  }
);