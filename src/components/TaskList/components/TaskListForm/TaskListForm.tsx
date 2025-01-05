import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema } from '../../schema/formSchema';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { CalendarIcon, ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check } from 'lucide-react';
import { TaskListFormProps } from './types';
import { oraganisation } from '@/constants';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { getProjects } from '@/components/Sidebar/api/getProjects';
import { ProjectType } from '@/components/Sidebar/components/types';
import { postTask } from '../../api/postTask';
import { updateTask } from '../../api/updateTask';
import { useModal } from '@/hooks/useModal';
import { ChatScreenModal } from '@/components/ChatScreen/components';

const TaskListForm: React.FC<TaskListFormProps> = ({ task, fetchTasks, onClose }) => {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);

  const projectId = useSelector((state: AppState) => state.selectedProjectId);
  const { isOpen, openModal, closeModal } = useModal();

  const assignees = [
    { id: '1', name: 'John Doe', value: 'johndoe', image: 'https://randomuser.me/api/portraits/men/33.jpg', inititals: 'JD' },
    { id: '2', name: 'Jane Doe', value: 'janedoe', image: 'https://randomuser.me/api/portraits/women/90.jpg', inititals: 'JD' },
    { id: '3', name: 'John Smith', value: 'johnsmith', image: 'https://randomuser.me/api/portraits/men/74.jpg', inititals: 'JS' },
    { id: '4', name: 'Jane Smith', value: 'janesmith', image: '', inititals: 'JS' },
    { id: '5', name: 'John Johnson', value: 'johnjohnson', image: '', inititals: 'JJ' },
    { id: '6', name: 'Jane Johnson', value: 'janejohnson', image: '', inititals: 'JJ' },
    { id: '7', name: 'John Brown', value: 'johnbrown', image: '', inititals: 'JB' },
    { id: '8', name: 'Jane Brown', value: 'janebrown', image: '', inititals: 'JB' },
    { id: '9', name: 'Noufal Rahim', value: 'noufalrahim', image: '', inititals: 'NR' },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      dueDate: task?.dueDate ? new Date(task.dueDate) : undefined,
      assignee: task?.assignee || '',
      project: task?.project || projectId.toString(),
      priority: task?.priority || '',
      organisation: oraganisation.id.toString(),
      status: task?.status || '',
    },
  });

  React.useEffect(() => {
    const fetchProjects = async () => {
      const projectsData: ProjectType[] = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, [projectId]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (task === undefined || task === null) {
      const resp = await postTask(values, projectId);
      console.log(resp);
    } else {
      const taskId = task?.id ? parseInt(task.id.toString()) : 0;
      const resp = await updateTask(values, projectId, taskId);
      console.log(resp);
    }
    fetchTasks();
    onClose();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChatClick = (e: any) => {
    e.preventDefault();
    openModal();
    console.log('Chat clicked');
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Task Title" {...field} />
                </FormControl>
                <FormDescription>Provide a title for your task.</FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Task Description" {...field} />
                </FormControl>
                <FormDescription>Optional: Add a task description.</FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild className="w-full">
                    <FormControl>
                      <Button variant={'outline'} className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar mode="single" className="bg-white" selected={field.value ? new Date(field.value) : undefined} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date('1900-01-01')} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white" side="top">
                      <SelectItem value="backlog">Backlog</SelectItem>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="in-review">In Review</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                      <SelectItem value="to-merge">To Merge</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Priority</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white" side="top">
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <FormField
              control={form.control}
              name="assignee"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Assignee</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" role="combobox" className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}>
                          {field.value ? assignees.find((assignee) => assignee.value === field.value)?.name : 'Select assignee'}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full bg-white p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search assignee..." />
                        <CommandList>
                          <CommandEmpty>No assignees found.</CommandEmpty>
                          <CommandGroup>
                            {assignees.map((assignee) => (
                              <CommandItem
                                key={assignee.value}
                                value={assignee.name}
                                onSelect={() => {
                                  field.onChange(assignee.value);
                                }}
                              >
                                {assignee.image ? <img src={assignee.image} alt={assignee.name} className="h-7 w-7 rounded-full" /> : <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-2xs">{assignee.inititals}</span>}
                                {assignee.name}
                                <Check className={cn('ml-auto', assignee.value === field.value ? 'opacity-100' : 'opacity-0')} />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Select the person responsible for this task.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button onClick={handleChatClick}>
              <MessageCircle size={16} />
              Chat
            </Button>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Project</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={true}>
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a project" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white" side="top">
                      {projects.map((project) => (
                        <SelectItem key={project.id} value={project.id.toString()}>
                          {project.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organisation"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Organisation</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={oraganisation.disabled}>
                    <FormControl className="w-full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={'Select your organisation'} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white" side="top">
                      <SelectItem value="123">Organisation 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">{task === undefined || task === null ? 'Create Task' : 'Update Task'}</Button>
        </form>
      </Form>
      <ChatScreenModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default TaskListForm;
