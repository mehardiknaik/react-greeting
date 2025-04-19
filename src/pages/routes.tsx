import React from 'react';
import { createHashRouter } from 'react-router';
import Layout from './Layout';
import withSuspense from '../HOC/withSuspense';

const Homepage = withSuspense(React.lazy(() => import('./Homepage')));
const FormPage = withSuspense(React.lazy(() => import('./FormPage')));
const GreetingPage = withSuspense(React.lazy(() => import('./GreetingPage')));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
      {
        path: '/greeting/:data',
        element: <GreetingPage />,
      },
    ],
  },
]);

export default router;
