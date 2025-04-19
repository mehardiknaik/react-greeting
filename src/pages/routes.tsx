import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import withSuspense from '../HOC/withSuspense';

const Homepage = withSuspense(React.lazy(() => import('./Homepage')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
