import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Contact } from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/template-vite-react-ts/',
    element: <App />,
    children: [
      {
        path: 'template-vite-react-ts/',
        element: <Home />,
      },
      {
        path: 'template-vite-react-ts/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
