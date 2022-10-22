import { Dynamic } from 'pages/dynamic';
import { Home } from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dynamic',
    element: <Dynamic />,
  },
]);
