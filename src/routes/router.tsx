import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { ActivatePage } from '@/pages/ActivatePage';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/activate', element: <ActivatePage /> },
  { path: '*', element: <HomePage /> },
]);
