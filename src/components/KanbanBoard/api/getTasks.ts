import { Task } from '@/components/TaskList/types';
import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getTasks = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${id}`);
    const resp = response.data;
    const tasks = resp[0].tasks;
    let taskData = [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      taskData.push(task);
    }
    taskData = taskData.map((task: Task) => {
      return {
        ...task,
        id: task.id!.toString(),
        column: task.columnKey,
        title: task.title,
      };
    });
    return taskData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
