import { createBrowserRouter } from 'react-router-dom';

import { LandingPage } from '@/pages/LandingPage';
import { ActivatePage } from '@/pages/ActivatePage';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/activate', element: <ActivatePage /> },
  { path: '*', element: <LandingPage /> },
]);
