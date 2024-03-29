import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import AddNotes from './components/AddNotes.jsx';
import EditNotes from './components/EditNotes.jsx';
import SeeNotes from './components/SeeNotes.jsx';

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/notes/add',
    element: <AddNotes />,
  },
  {
    path: '/notes/edit/:id',
    element: <EditNotes />,
  },
  {
    path: '/notes/:id',
    element: <SeeNotes />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
