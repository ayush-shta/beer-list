import axios from 'axios';

import { API_BASE_URL } from 'src/constants/config';

export const httpInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});
