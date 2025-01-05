import { Task } from '../../types';

export interface TaskListFormProps {
  task: Task | null;
  fetchTasks: () => void;
  onClose: () => void;
}
