/* eslint-disable react/react-in-jsx-scope */
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../ui/sidebar';
import { DropdownMenu } from '../../ui/dropdown-menu';
import { User2 } from 'lucide-react';
// import { createUser, UserType } from '../api/createUser';
const SideBarFooter = () => {
  const user = false;

  // const handleSignOut = async () => {
  //   try {
  //     await signOut();
  //     console.log('Signed out successfully!');
  //   } catch (error) {
  //     console.error('Sign-out failed:', error instanceof Error ? error.message : error);
  //   }
  // };

  // const postUserData = async (userData: UserType) => {
  //   const postResp = await createUser({
  //     username: userData.username,
  //     fullName: userData.fullName,
  //     imageUrl: userData.imageUrl,
  //   });

  //   console.log('Post response:', postResp);
  // };

  // React.useEffect(() => {
  //   if (user) {
  //     console.log('User:', user);
  //     dispatch({
  //       type: 'auth/user',
  //       payload: {
  //         username: user.username,
  //         name: user.fullName,
  //         image: user.imageUrl,
  //       },
  //     });

  //     postUserData({
  //       username: user.username || '',
  //       fullName: user.fullName || '',
  //       imageUrl: user.imageUrl,
  //     });
  //   }
  // }, [user]);

  if (!user) {
    return (
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => console.log('Sign in')}>
              <a href="/login" className="flex h-full w-full items-center gap-2 rounded-md p-2 py-4 hover:bg-gray-200">
                <User2 className="h-5 w-5 rounded-full" />
                Sign in
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    );
  }

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            {/* <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                {user.imageUrl ? <img src={user.imageUrl} alt={user.firstName || ''} className="h-6 w-6 rounded-full" /> : <User2 className="h-8 w-8 rounded-full" />}
                {user.fullName || 'Anonymous'}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem onClick={() => console.log('Account')}>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SideBarFooter;
