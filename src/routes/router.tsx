import { createBrowserRouter } from 'react-router-dom';

import { LandingPage } from '@/pages/LandingPage';
import { ActivatePage } from '@/pages/ActivatePage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { SupportPage } from '@/pages/SupportPage';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/activate', element: <ActivatePage /> },
  { path: '/politique-de-confidentialite', element: <PrivacyPage /> },
  { path: '/assistance', element: <SupportPage /> },
  { path: '*', element: <LandingPage /> },
]);
