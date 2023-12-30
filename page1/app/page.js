// pages/_app.js

import AccountSettings from './components/AccountSettings';
import CreateNewGraphPage from './components/CreateNewGraphPage';
import GraphDetailsPage from './components/GraphDetailsPage';

import ProfileDashboard from './components/ProfileDashboard';
import './globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <ProfileDashboard />
      <GraphDetailsPage />
      <CreateNewGraphPage />
      <AccountSettings />
      
    </>
  );
}

export default MyApp;
