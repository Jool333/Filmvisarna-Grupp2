import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import MainPage from '@/pages/MainPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import TicketViewPage from './pages/TicketViewPage.jsx'
import LoginViewPage from './pages/LoginViewPage.jsx'
import CreateAccountPage from './pages/CreateAccountPage.jsx'
import ConfirmationPage from './pages/ConfirmationPage.jsx'
import BookingViewPage from './pages/BookingViewPage.jsx'
import LoggedInView from './pages/LoggedInView.jsx';

export const pages = [
  { path: '/', label: 'Startsida', element: <MainPage /> },
  { path: '/movie/:id', label: 'Movie Detail', element: <MovieDetailPage /> },
  { path: '/tickets', label: 'Ticket View', element: <TicketViewPage /> },
  { path: '/login', label: 'Login', element: <LoginViewPage /> },
  { path: '/create-account', label: 'Create Account', element: <CreateAccountPage /> },
  { path: '/confirmation/:id', label: 'Confirmation', element: <ConfirmationPage /> },
  { path: '/booking/:screeningId', label: 'Booking View', element: <BookingViewPage /> },
  { path: '/loggedin', label: 'Bokningar', element: <LoggedInView /> }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: pages
  }
]);

ReactDOM.createRoot(document.querySelector('#root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);
