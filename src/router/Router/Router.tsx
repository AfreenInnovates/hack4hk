/* eslint-disable react/react-in-jsx-scope */

import { Routes, Route } from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Scheduler } from '@/components/Scheduler';
import { TaskList } from '@/components/TaskList';
// import { MindMap } from '@/components/MindMap';
import { KanbanBoard } from '@/components/KanbanBoard';
import { MyNetwork } from '@/components/MyNetwork';
import { ChatScreen } from '@/components/ChatScreen';
import { Landing } from '@/components/Landing';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import UserProfile from '../../components/UserProfile/UserProfile';
import { ProjectDescription } from '../../components/ProjectDescription';
import { Layout } from '@/components/Layout';
import Dashboard from '@/components/Sidebar/components/Dashboard/Dashboard';
import { Projects } from '@/components/Projects';
import Campaigns  from '@/components/Campaigns/Campaigns'; // Import the Campaigns component
import StartCampaigns from '@/components/Campaigns/StartCampaigns';
import ViewTransactions from '@/components/Campaigns/ViewTransactions';
import TransactionDetails from '@/components/Campaigns/TransactionDetails';
import DonateNow from '@/components/Campaigns/DonateNow';
import Feeds from '@/components/Feeds/Feeds';
import { TodayList } from '@/components/Today';
import { Notifications } from '@/components/Notifications';
import Chating from '@/components/Chat';
import { MyTasks } from '@/components/MyTasks';
import { SidebarComponent } from '@/components/Admin/components/Sidebar';
import { Requests } from '@/components/Admin/components/Requests';
import { OrganizationProfile } from '@/components/Admin/components/OrganizationProfile';
import { OrganizationSignup } from '@/components/Organization/components/Signup';
import { Login as OrganizationLogin } from '@/components/Organization/components/Login';
import { Disasters } from '@/components/Disasters';

function Router() {
  const { ROOT_PATH, PROJECT_OVERVIEW_PATH, SCHEDULER_PATH, TABLE_PATH, LOGIN_PATH, SIGNUP_PATH, MY_NETWORK_PATH, MESSAGES_PATH, DASHBOARD_PATH, PROJECTS_PATH, CAMPAIGNS_PATH, START_CAMPAIGNS_PATH, VIEW_TRANSACTIONS_PATH, TRANSACTION_DETAILS_PATH, DONATE_NOW_PATH, FEEDS_PATH, KANBAN_PATH, USER_OVERVIEW_PATH } = useRoutePaths();

  return (
    <Routes>
      <Route path={ROOT_PATH} element={<Landing />} />
      <Route
        path={DASHBOARD_PATH}
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path={KANBAN_PATH}
        element={
          <Layout>
            <KanbanBoard />
          </Layout>
        }
      />
      <Route
        path={SCHEDULER_PATH}
        element={
          <Layout>
            <Scheduler />
          </Layout>
        }
      />
      <Route
        path={TABLE_PATH}
        element={
          <Layout>
            <TaskList />
          </Layout>
        }
      />
      {/* <Route path={MIND_MAP_PATH} element={<MindMap />} /> */}
      <Route
        path={MY_NETWORK_PATH}
        element={
          <Layout>
            <MyNetwork />
          </Layout>
        }
      />
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={SIGNUP_PATH} element={<Signup />} /> {/* Add this */}
      <Route path={MESSAGES_PATH} element={<ChatScreen />} />
      <Route path={SIGNUP_PATH} element={<Signup />} />
      <Route path="/project-description" element={<ProjectDescription />} />
      <Route
        path={USER_OVERVIEW_PATH}
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      <Route
        path={MESSAGES_PATH}
        element={
          <Layout>
            <ChatScreen />
          </Layout>
        }
      />
      <Route
        path={FEEDS_PATH}
        element={
          <Layout>
            <Feeds />
          </Layout>
        }
      />
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={SIGNUP_PATH} element={<Signup />} />
      <Route path={MESSAGES_PATH} element={<ChatScreen />} />
      <Route
        path={PROJECT_OVERVIEW_PATH}
        element={
          <Layout>
            <ProjectDescription />
          </Layout>
        }
      />
      <Route
        path={PROJECTS_PATH}
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path={CAMPAIGNS_PATH} // Add this route for /campaigns
        element={
          <Layout>
            <Campaigns />
          </Layout>
        }
      />
      <Route
        path={START_CAMPAIGNS_PATH}
        element={
          <Layout>
            <StartCampaigns />
          </Layout>
        }
      />
      <Route
        path={VIEW_TRANSACTIONS_PATH}
        element={
          <Layout>
            <ViewTransactions />
          </Layout>
        }
      />
      <Route
        path={TRANSACTION_DETAILS_PATH}
        element={
          <Layout>
            <TransactionDetails />
          </Layout>
        }
      />
      <Route
        path={DONATE_NOW_PATH}
        element={
          <Layout>
            <DonateNow />
          </Layout>
        }
      />
      <Route
        path="/today"
        element={
          <Layout>
            <TodayList />
          </Layout>
        }
      />
      <Route
        path="/notifications"
        element={
          <Layout>
            <Notifications />
          </Layout>
        }
      />
      <Route
        path="/disasters"
        element={
          <Layout>
            <Disasters />
          </Layout>
        }
      />
      <Route
        path="/tasks"
        element={
          <Layout>
            <MyTasks />
          </Layout>
        }
      />
      <Route
        path="/admin"
        element={
          <Layout>
            <SidebarComponent></SidebarComponent>
          </Layout>
        }
      />
      <Route path="/admin/requests" element={<Requests></Requests>} />
      <Route path="/admin/requests/:organizationid" element={<OrganizationProfile></OrganizationProfile>} />
      <Route path="/organization/signup" element={<OrganizationSignup></OrganizationSignup>} />
      <Route path="/organization/login" element={<OrganizationLogin></OrganizationLogin>} />
      <Route path="/chats" element={<Chating />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default Router;
