import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
{
  path: '/',
    element: <App />,
    children: [
    {
      index: true,
      element: <AboutMePage />,
    },
    {
      path: 'portfolio',
      element: <PortfolioPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'resume',
      element: <ResumePage />,
    },
  ],
}, 
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)











