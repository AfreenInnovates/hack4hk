import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getNodes = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${id}`);
    const resp = response.data;
    const mindMap = resp[0].mindMap;
    const nodes = mindMap.nodes;
    return nodes;
  } catch (error) {
    console.error(error);
    return [];
  }
};
