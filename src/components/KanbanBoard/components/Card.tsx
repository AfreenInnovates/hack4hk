/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion';
import DropIndicator from './DropIndicator';
import { AssigneeType, CardProps } from './types';
import { TrashIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { getUser } from '../api/getUser';
import { AvatarFallbackFunction } from '@/lib/AvatarFallback';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TaskStatus } from '@/components/Scheduler/components/types';
import { cn } from '@/lib/utils';

const statusColorMap: Record<TaskStatus, string> = {
  [TaskStatus.BACKLOG]: 'border-l-pink-500',
  [TaskStatus.TODO]: 'border-l-red-500',
  [TaskStatus.IN_PROGRESS]: 'border-l-yellow-500',
  [TaskStatus.IN_REVIEW]: 'border-l-blue-500',
  [TaskStatus.DONE]: 'border-l-green-500',
  [TaskStatus.CANCELED]: 'border-l-gray-500',
};

const Card = ({ title, id, columnKey, handleDragStart, handleDelete, assignee, handleOnClick, status }: CardProps) => {
  const color = statusColorMap[status as TaskStatus] || 'border-l-gray-500';

  const projectName = useSelector((state: AppState) => state.selectedProjectName);
  const [assigneeData, setAssigneeData] = useState<AssigneeType>();

  const fetchAssignee = async () => {
    const response = await getUser(assignee);
    setAssigneeData(response);
  };

  useEffect(() => {
    fetchAssignee();
  }, []);

  return (
    <>
      <TooltipProvider>
        <DropIndicator beforeId={id!.toString()} column={columnKey} />
        <motion.div onClick={handleOnClick} layout layoutId={id!.toString()} draggable="true" onDragStart={(e) => handleDragStart(e, { title, id, columnKey })} className={cn('flex cursor-grab flex-col gap-3 rounded border border-l-4 border-black bg-secondary p-3 active:cursor-grabbing', color)}>
          <div className="flex items-center justify-between gap-1">
            <p className="max-w-[90%] text-sm">{title}</p>
            <TrashIcon className="cursor-pointer" size={20} color="gray" onClick={() => handleDelete(id!)} />
          </div>
          <div className="flex items-center justify-between gap-1">
            <span className="text-sm">{projectName}</span>
            <Tooltip>
              <TooltipTrigger>
                <Avatar className="h-7 w-7">
                  <AvatarImage src={assigneeData?.image} />
                  {assigneeData?.name && assigneeData?.name.length > 0 ? (
                    <AvatarFallback className="border border-gray-300 bg-primary text-xs text-black">{AvatarFallbackFunction(assigneeData?.name)}</AvatarFallback>
                  ) : (
                    <div className="h-7 w-7">
                      <AvatarImage src={'https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png'} />
                    </div>
                  )}
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black text-white">
                <p>{assigneeData?.name && assigneeData?.name.length > 0 ? assigneeData?.name : 'No assignee'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </motion.div>
      </TooltipProvider>
    </>
  );
};
export default Card;
