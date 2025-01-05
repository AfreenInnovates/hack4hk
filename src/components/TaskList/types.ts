export type Task = {
  id?: string | number;
  title: string;
  description?: string;
  columnKey: string;
  status: 'backlog' | 'todo' | 'in-progress' | 'in-review' | 'done' | 'to-merge';
  dueDate?: string;
  assignee?: string;
  project?: string;
  priority?: 'low' | 'medium' | 'high';
  organisation?: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
};
