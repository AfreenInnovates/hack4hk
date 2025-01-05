export interface EventsCardProps {
  title: string;
  assignee?: string;
  status: string;
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any;
}

export enum TaskStatus {
  BACKLOG = 'backlog',
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  IN_REVIEW = 'in-review',
  DONE = 'done',
  CANCELED = 'canceled',
}
