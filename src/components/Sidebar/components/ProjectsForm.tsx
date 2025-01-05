/* eslint-disable react/react-in-jsx-scope */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '../schema/formSchema';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { postProject } from '../api/postProject';

const ProjectForm = () => {
  const assignees = [
    { id: '1', name: 'John Doe', value: 'johndoe', image: 'https://randomuser.me/api/portraits/men/33.jpg', initials: 'JD' },
    { id: '2', name: 'Jane Doe', value: 'janedoe', image: 'https://randomuser.me/api/portraits/women/90.jpg', initials: 'JD' },
    { id: '9', name: 'Noufal Rahim', value: 'noufalrahim', image: '', initials: 'NR' },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      users: [],
      organisation: 123,
      showKanban: true,
      showCalendar: true,
      showMindMap: true,
      showTable: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await postProject(values);
    console.log(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Project Title" {...field} />
              </FormControl>
              <FormDescription>Provide a title for your project.</FormDescription>
              <FormMessage />
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
                <Textarea placeholder="Project Description" {...field} />
              </FormControl>
              <FormDescription>Optional: Add a project description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="users"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Assignees</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" role="combobox" className={cn('w-full justify-between', field.value && !field.value.length && 'text-muted-foreground')}>
                      {field.value && field.value.length > 0 ? `${field.value.length} assignee(s) selected` : 'Select assignees'}
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
                              if (!field.value) return;
                              const isSelected = field.value.includes(assignee.value);
                              if (isSelected) {
                                field.onChange(field.value.filter((val) => val !== assignee.value));
                              } else {
                                field.onChange([...field.value, assignee.value]);
                              }
                            }}
                          >
                            {assignee.image ? <img src={assignee.image} alt={assignee.name} className="h-7 w-7 rounded-full" /> : <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-2xs">{assignee.initials}</span>}
                            {assignee.name}
                            <Check className={cn('ml-auto', field.value && field.value.includes(assignee.value) ? 'opacity-100' : 'opacity-0')} />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>Select the people responsible for this task.</FormDescription>
              <div className="mt-2 flex flex-wrap gap-2">
                {field.value &&
                  field.value.map((userId) => {
                    const user = assignees.find((assignee) => assignee.value === userId);
                    return (
                      <span key={userId} className="flex items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-sm">
                        {user?.name || 'Unknown'}
                        <button
                          type="button"
                          onClick={() => {
                            if (!field.value) return;
                            field.onChange(field.value.filter((val) => val !== userId));
                          }}
                          className="text-red-500"
                        >
                          &times;
                        </button>
                      </span>
                    );
                  })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="showKanban"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Show Kanban Board</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="showCalendar"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Show Calendar</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="showMindMap"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Show Mindmap</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="showTable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Show Table</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Create Project</Button>
      </form>
    </Form>
  );
};

export default ProjectForm;
