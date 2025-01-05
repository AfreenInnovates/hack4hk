import { Task } from '@/components/TaskList/types';
import { BASE_URL } from '@/constants';
import axios from 'axios';
import { EventType } from '../types';

export const getEvents = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${id}`);
    const resp = response.data;
    const tasks: Task[] = resp[0].tasks;
    const taskData: EventType[] = [];
    for (let i = 0; i < tasks.length; i++) {
      const taskItem = {
        start: tasks[i].dueDate ? new Date(tasks[i].dueDate as string) : new Date(),
        end: tasks[i].dueDate ? new Date(tasks[i].dueDate as string) : new Date(),
        title: tasks[i].title,
        project: tasks[i].project,
        assignee: tasks[i].assignee,
        status: tasks[i].status,
        id: tasks[i].id,
      };
      taskData.push(taskItem);
    }

    return taskData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
