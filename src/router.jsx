
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Index from './pages/Index';
import TemplatePage from './pages/TemplatePage';
import ReceiptPage from './pages/ReceiptPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/templates/:templateId',
        element: <TemplatePage />,
      },
      {
        path: '/receipts/:receiptId',
        element: <ReceiptPage />,
      },
    ],
  },
]);

export default router;
