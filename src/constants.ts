export let BASE_URL = '';
const ENVIRONMENT_DEVELOPMENT = 'development' as const;
const ENVIRONMENT_PRODUCTION = 'production' as const;
const environment: string = ENVIRONMENT_PRODUCTION;

if (environment === ENVIRONMENT_DEVELOPMENT) {
  BASE_URL = 'http://localhost:5000/api';
} else if (environment === ENVIRONMENT_PRODUCTION) {
  BASE_URL = 'https://sustainlink-server.vercel.app/api';
}

export const oraganisation = {
  id: '123',
  name: 'Oragantion 1',
  disabled: true,
};

export const loggedInUser = {};
