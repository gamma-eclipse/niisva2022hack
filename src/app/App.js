import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import './styles/reset.css';
import { theme } from './theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}
