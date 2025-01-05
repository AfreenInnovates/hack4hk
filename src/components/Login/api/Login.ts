import { BASE_URL } from '@/constants';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postLogin = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response;
};
