import { BASE_URL } from '@/constants';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postTask = async (data: any, projectId: number) => {
  try {
    const selectedColumnKey = data.status;
    const response = await axios.get(`${BASE_URL}/projects?id=${projectId}`);
    const resp = response.data;
    const tasksData = resp[0].tasks;
    const task = {
      ...data,
      columnKey: selectedColumnKey,
      dueDate: new Date(data.dueDate).toISOString(),
      id: tasksData.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: '',
    };
    tasksData.push(task);
    resp[0].tasks = tasksData;
    const postResponse = await axios.patch(`${BASE_URL}/projects/${projectId}`, resp[0]);
    return postResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};
