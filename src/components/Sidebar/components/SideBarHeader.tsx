import * as React from 'react';
import { SideBarHeaderProps } from './types';
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarTrigger } from '../../../components/ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu';
const SideBarHeader: React.FC<SideBarHeaderProps> = ({ title, open }) => {
  return (
    <>
      <SidebarHeader className="flex flex-row justify-between">
        {open && <h1 className="text-2xl font-bold">{title}</h1>}
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem className="mx-2 rounded-sm hover:bg-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <SidebarMenuButton>
                Select Workspace  */}
              {/* CHANGE ORGANISATION TO WORKSPACE */}
              {/* <ChevronDown className="ml-auto" />
              </SidebarMenuButton> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-popper-anchor-width] bg-white">
              <DropdownMenuItem className="hover:bg-gray-400">
                <span className="">Acme Inc</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Acme Corp.</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default SideBarHeader;
