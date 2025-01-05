import * as React from 'react';
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ChevronDown, Download, MoreHorizontal, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppBar } from '../AppBar';

interface Task {
  id: string;
  title: string;
  status: string;
  dueDate: string;
  assignee: string;
  priority: string;
}

const MyTasks: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [data, setData] = React.useState<Task[]>([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMode, setModalMode] = React.useState<'create' | 'edit'>('create');
  const [currentTask, setCurrentTask] = React.useState<Task | null>(null);

  const [formData, setFormData] = React.useState<Task>({
    id: '',
    title: '',
    status: '',
    dueDate: '',
    assignee: '',
    priority: '',
  });

  // Handle form data change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Create Task
  const handleCreateTask = () => {
    setData((prevData) => [...prevData, { ...formData, id: `${Date.now()}` }]);
    closeModal();
  };

  // Handle Edit Task
  const handleEditTask = () => {
    if (currentTask) {
      setData((prevData) => prevData.map((task) => (task.id === currentTask.id ? { ...formData } : task)));
    }
    closeModal();
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      id: '',
      title: '',
      status: '',
      dueDate: '',
      assignee: '',
      priority: '',
    });
    setCurrentTask(null);
  };

  // Handle Delete Task
  const handleDeleteTask = (taskId: string) => {
    setData((prevData) => prevData.filter((task) => task.id !== taskId));
  };

  // Function to download the tasks as a CSV
  const downloadCSV = () => {
    const header = ['ID', 'Title', 'Status', 'Due Date', 'Assignee', 'Priority'];
    const rows = data.map((task) => [task.id, task.title, task.status, task.dueDate, task.assignee, task.priority]);

    const csvContent = [header, ...rows].map((row) => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tasks.csv';
    link.click();
  };

  const columns: ColumnDef<Task>[] = [
    {
      id: 'select',
      header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => <div className="capitalize">{row.getValue('title')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => <div className="capitalize">{row.getValue('dueDate')}</div>,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      cell: ({ row }) => <div className="capitalize">{row.getValue('assignee')}</div>,
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      cell: ({ row }) => <div className="capitalize">{row.getValue('priority')}</div>,
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setCurrentTask(row.original);
                setFormData(row.original);
                setModalMode('edit');
                setIsModalOpen(true);
              }}
            >
              Edit Task
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDeleteTask(row.original.id)}>Delete Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="min-h-screen w-full px-5">
      <AppBar
        title="My Tasks"
        description="View all your tasks."
        buttons={[
          {
            title: 'Create Task',
            onClick: () => {
              setModalMode('create');
              setIsModalOpen(true);
            },
            icon: <PlusIcon size={15} />,
          },
          { title: 'Download', onClick: downloadCSV, icon: <Download size={15} /> }, // Bind downloadCSV here
        ]}
      />
      <div className="flex items-center py-4">
        <Input placeholder="Filter tasks..." value={(table.getColumn('title')?.getFilterValue() as string) ?? ''} onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)} className="max-w-sm" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="cursor-pointer border border-2 border-l-0 border-r-0 border-t-0 border-dashed">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-8">
            <h2 className="mb-4 text-2xl font-semibold">{modalMode === 'create' ? 'Create Task' : 'Edit Task'}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                modalMode === 'create' ? handleCreateTask() : handleEditTask();
              }}
            >
              <div className="mb-4">
                <label className="mb-2 block">Title</label>
                <Input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Status</label>
                <Input type="text" name="status" value={formData.status} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Due Date</label>
                <Input type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Assignee</label>
                <Input type="text" name="assignee" value={formData.assignee} onChange={handleInputChange} required />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Priority</label>
                <Input type="text" name="priority" value={formData.priority} onChange={handleInputChange} required />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
                <Button type="submit">{modalMode === 'create' ? 'Create' : 'Update'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
