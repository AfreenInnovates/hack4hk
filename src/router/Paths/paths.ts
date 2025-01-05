const ROOT_PATH = '/';
const LOGIN_PATH = '/login';
const SIGNUP_PATH = '/signup/';
const PROJECT_OVERVIEW_PATH = '/projects/:projectId';
const KANBAN_PATH = '/kanban';
const SCHEDULER_PATH = '/calendar';
const TABLE_PATH = '/table';
const MIND_MAP_PATH = '/mindmap';
const MY_NETWORK_PATH = '/my-network';
const MESSAGES_PATH = '/messages';
const DASHBOARD_PATH = '/dashboard';
const PROJECTS_PATH = '/projects';
const CAMPAIGNS_PATH= '/campaigns';
const START_CAMPAIGNS_PATH='campaigns/startcampaigns';
const VIEW_TRANSACTIONS_PATH='campaigns/viewtransactions';
const TRANSACTION_DETAILS_PATH='campaigns/viewtransactions/transactiondetails'
const DONATE_NOW_PATH='campaigns/donatenow'
const FEEDS_PATH='/feeds'

const USER_OVERVIEW_PATH = '/users/:userid';

const paths = {
  ROOT_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  PROJECT_OVERVIEW_PATH,
  KANBAN_PATH,
  SCHEDULER_PATH,
  TABLE_PATH,
  MIND_MAP_PATH,
  MY_NETWORK_PATH,
  MESSAGES_PATH,
  DASHBOARD_PATH,
  PROJECTS_PATH,
  CAMPAIGNS_PATH,
  START_CAMPAIGNS_PATH,
  VIEW_TRANSACTIONS_PATH,
  TRANSACTION_DETAILS_PATH,
  DONATE_NOW_PATH,
  FEEDS_PATH,
  USER_OVERVIEW_PATH,
} as const;

export default paths;
