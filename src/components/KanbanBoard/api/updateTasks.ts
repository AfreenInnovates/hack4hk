import { BASE_URL } from '@/constants';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateTask = async (data: any, projectId: number | string) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${projectId}`);
    const resp = response.data;

    const tasks = data;
    const patchResponse = await axios.patch(`${BASE_URL}/projects/${projectId}`, { ...resp[0], tasks });
    return patchResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};
