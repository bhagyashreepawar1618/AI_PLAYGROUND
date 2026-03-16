import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/MainComponents/Layout.jsx';
import Home from './components/MainComponents/Home.jsx';
import Profile from './components/User/Profile.jsx';
import Register from './components/MainComponents/Register.jsx';
import Login from './components/MainComponents/Login.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}></RouterProvider>
);
