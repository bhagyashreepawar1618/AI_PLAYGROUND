import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/MainComponents/Layout.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}></RouterProvider>
);
