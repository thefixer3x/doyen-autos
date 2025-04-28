import React from 'react';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { CookieConsent } from './components/ui/CookieConsent';
import { NotFound } from './pages/NotFound';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const is404 = window.location.pathname !== '/';

  return (
    <ThemeProvider>
      {is404 ? (
        <NotFound />
      ) : (
        <Layout>
          <LandingPage />
          <CookieConsent />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;