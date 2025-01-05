import { configureStore } from '@reduxjs/toolkit';
export type AppState = {
  selectedProjectId: number;
  selectedProjectName: string;
  authUser: {
    _id: string;
    username: string;
    name: string;
    image: string;
  };
};

const initialState = {
  selectedProjectId: 0,
  selectedProjectName: '',
  authUser: {
    username: '',
    name: '',
    image: '',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AppReducer(prevState = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'project/selected':
      return {
        ...prevState,
        selectedProjectId: action.payload.id,
        selectedProjectName: action.payload.name,
      };
    case 'auth/user':
      localStorage.setItem('authUser', JSON.stringify(action.payload));
      return {
        ...prevState,
        authUser: action.payload,
      };
    default:
      return prevState;
  }
}

const store = configureStore({
  reducer: AppReducer,
});

export default store;
