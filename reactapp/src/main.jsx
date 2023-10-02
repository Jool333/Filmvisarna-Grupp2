import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
//import './index.css'
import MainPage from '@/pages/MainPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import TicketViewPage from './pages/TicketViewPage.jsx'
import LoginViewPage from './pages/LoginViewPage.jsx'
import GuestBookingPage from './pages/GuestBookingPage.jsx'
import CreateAccountPage from './pages/CreateAccountPage.jsx'
import ConfirmationPage from './pages/ConfirmationPage.jsx'
import BookingViewPage from './pages/BookingViewPage.jsx'
import BookingConfirmPage from './pages/BookingConfirmPage.jsx'

export const pages = [
  { path: '/', label: 'Startsida', element: <MainPage /> },
  { path: '/movie/:id', label: 'Movie Detail', element: <MovieDetailPage /> },
  { path: '/ticket', label: 'Ticket View', element: <TicketViewPage /> },
  { path: '/login', label: 'Login', element: <LoginViewPage /> },
  { path: '/guest-booking', label: 'Guest Booking', element: <GuestBookingPage /> },
  { path: '/create-account', label: 'Create Account', element: <CreateAccountPage /> },
  { path: '/confirmation', label: 'Confirmation', element: <ConfirmationPage /> },
  { path: '/booking/:id', label: 'Booking View', element: <BookingViewPage /> },
  { path: '/booking/:id/confirm', label: 'Booking Confirm', element: <BookingConfirmPage /> }
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