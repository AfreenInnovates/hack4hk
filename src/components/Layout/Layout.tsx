import * as React from 'react';
import AppSidebar from '../Sidebar/Sidebar';
import { LayoutProps } from './types';
import { SidebarProvider } from '../ui/sidebar';
const Layout: React.FC<LayoutProps> = ({ children, isAdmin = false }) => {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
};

export default Layout;
