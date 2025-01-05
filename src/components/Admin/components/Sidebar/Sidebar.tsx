/* eslint-disable react/react-in-jsx-scope */
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../../../ui/sidebar';
import { MdTask } from 'react-icons/md';
import { useSidebar } from '@/components/ui/sidebar';

import { SideBarHeader } from '@/components/Sidebar/components';
import { SideBarFooter } from '@/components/Sidebar/components';

function SidebarComponent() {
  const { open } = useSidebar();

  const menuItems = [
    {
      title: 'Requests', // Only "Requests" item
      url: '/admin/requests', // URL for the Requests page
      icon: <MdTask size={20} />, // Icon for the Requests item
    },
  ];

  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SideBarHeader title={'Admin Sidebar'} open={open} />
      <SidebarContent className="flex gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {menuItems.map((item, index) => (
              <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200" key={index}>
                <SidebarMenuButton variant={'default'}>
                  <a href={item.url} className="flex w-full flex-row items-center gap-5">
                    {item.icon}
                    {open && <span className="text-md">{item.title}</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SideBarFooter />
    </Sidebar>
  );
}

export default SidebarComponent;
