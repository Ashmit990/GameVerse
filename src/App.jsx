import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout
import RootLayout from './Layout/RootLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';

// Utils
import { initStorage } from './utils/storage';

const App = () => {
  useEffect(() => {
    initStorage();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'footer', element: <Footer /> },
      ],
    },
    { path: 'login', element: <LoginPage /> },
    { path: 'signup', element: <SignupPage /> },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
