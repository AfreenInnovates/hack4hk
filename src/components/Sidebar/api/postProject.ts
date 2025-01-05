import { BASE_URL } from '@/constants';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postProject = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/projects`, {
      ...data,
    });
    const resp = response.data;
    return resp;
  } catch (error) {
    console.error(error);
    return [];
  }
};
