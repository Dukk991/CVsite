import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header.tsx';
import './index.css';
import Contacts from './screens/Contacts.tsx';
import Home from './screens/Home.tsx';
import Links from './screens/Links.tsx';

// Layout component to wrap all pages with Header
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders the current route */}
    </>
  );
}

const siteRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/links', element: <Links /> }
    ]
  }
]);

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <RouterProvider router={siteRouter} />
  </StrictMode>
);
