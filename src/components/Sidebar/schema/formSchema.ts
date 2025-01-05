import * as z from 'zod';

export const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  users: z.array(z.string()).optional(),
  organisation: z.number().int(),
  showKanban: z.boolean(),
  showCalendar: z.boolean(),
  showMindMap: z.boolean(),
  showTable: z.boolean(),
});
