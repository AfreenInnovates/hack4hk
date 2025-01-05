import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get(`${BASE_URL}/projects`);
  const resp = response.data;
  return resp;
};