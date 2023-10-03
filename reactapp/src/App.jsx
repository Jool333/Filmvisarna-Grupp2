// Only import your sass in App (not every component)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./sass/main.scss";
import React from 'react';
import LoginViewPage from './pages/LoginViewPage';
import StickyFooter from './components/StickyFooter/StickyFooter';
// Import some Bootstrap components
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import MainPage from './pages/MainPage';
import MovieDetailPage from './pages/MovieDetailPage'
import CreateAccountPage from './pages/CreateAccountPage';
import ConfirmationPage from './pages/ConfirmationPage';
import GuestBookingPage from './pages/GuestBookingPage';
import BookingViewPage from './pages/BookingViewPage';
import TicketViewPage from './pages/TicketViewPage';
import LoggedInView from './pages/LoggedInView';

export default function App() {


    return <>
<body>
    <MainMenu />
    <main>
        <Router>
              <Routes>
                {/* Define your routes */}
                <Route path="/" element={<MainPage />} />
                <Route path="/LoginViewPage" element={<LoginViewPage />} />
                <Route path="/MovieDetailPage" element={< MovieDetailPage/>} />
                <Route path="/CreateAccountPage" element={< CreateAccountPage/>} />
                <Route path="/ConfirmationPage" element={< ConfirmationPage/>} />
                <Route path="/BookingViewPage" element={< BookingViewPage/>} />
                <Route path="/GuestBookingPage" element={< GuestBookingPage/>} />
                <Route path="/TicketViewPage" element={< TicketViewPage/>} />
                <Route path="/LoggedInView" element={< LoggedInView/>} />
    
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    </main>
    <StickyFooter/>
</body>
    </>;
}