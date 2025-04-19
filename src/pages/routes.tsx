import React from 'react';
import { createHashRouter } from 'react-router';
import Layout from './Layout';
import withSuspense from '../HOC/withSuspense';

const Homepage = withSuspense(React.lazy(() => import('./Homepage')));

const router = createHashRouter([
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
