import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getDisasters = async () => {
  const response = await axios.get(`${BASE_URL}/disasters`);
  const resp = response.data;
  return resp;
};
