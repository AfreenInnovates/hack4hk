import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getNetworks = async (id: string) => {
  console.log(id);
  const response = await axios.get(`${BASE_URL}/users/network/${id}`);
  const resp = response.data;
  return resp;
};
