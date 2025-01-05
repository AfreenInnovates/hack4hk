/* eslint-disable react/react-in-jsx-scope */
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="elfsight-app-05786466-288c-4330-b208-c5e1a302dcc4" data-elfsight-app-lazy></div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ClerkProvider>
    </Provider>
  );
}

export default App;
