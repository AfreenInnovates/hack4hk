import * as React from 'react';
import { Link } from 'react-router-dom';
import { IoCalendarClear } from 'react-icons/io5';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronDown, FileCode, KanbanIcon, MessageCircleCode, TableIcon } from 'lucide-react';
import { CollapsibleContentsProps } from './types';
import { useDispatch } from 'react-redux';

const CollapsibleContents: React.FC<CollapsibleContentsProps> = ({ project, defaultOpen }) => {
  const { open } = useSidebar();
  const dispatch = useDispatch();

  const menuItems = [
    { condition: project.showTable, title: 'Table', url: '/table', icon: <TableIcon size={13} /> },
    { condition: project.showKanban, title: 'Kanban', url: '/kanban', icon: <KanbanIcon size={13} /> },
    // { condition: project.showMindMap, title: 'MindMap', url: '/mindmap', icon: <BrainCircuitIcon size={13} /> },
    { condition: project.showCalendar, title: 'Calendar', url: '/calendar', icon: <IoCalendarClear size={13} /> },
    { condition: true, title: 'Chat Rooms', url: '/chatrooms', icon: <MessageCircleCode size={13} /> },
  ];

  return (
    <TooltipProvider>
      <Collapsible className="group/collapsible" defaultOpen={defaultOpen}>
        <SidebarMenuItem className="list-none rounded">
          <SidebarMenuButton>
            <Tooltip>
              <TooltipTrigger className="w-full">
                <CollapsibleTrigger className="flex w-full items-center justify-center rounded px-2 py-1 hover:bg-gray-200">
                  <FileCode size={15} className="mr-2" />
                  {open && (project.title.length > 15 ? `${project.title.substring(0, 15)}...` : project.title)}
                  <ChevronDown size={15} className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-black text-white">
                <p>{project.title}</p>
              </TooltipContent>
            </Tooltip>
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {menuItems.map(
                (item, index) =>
                  item.condition && (
                    <SidebarMenuSubItem key={index} className="hover:bg-gray-200">
                      <SidebarMenuSubButton>
                        <Link
                          to={item.url}
                          className="flex w-full flex-row items-center gap-2"
                          onClick={() => {
                            dispatch({
                              type: 'project/selected',
                              payload: {
                                id: project.id,
                                name: project.title,
                              },
                            });
                          }}
                        >
                          {item.icon}
                          {open && <span className="text-sm">{item.title}</span>}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ),
              )}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </TooltipProvider>
  );
};

export default CollapsibleContents;
