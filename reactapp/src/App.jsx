// Only import your sass in App (not every component)
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./sass/main.scss";
import React, { useEffect, useState } from 'react';
import StickyFooter from './components/StickyFooter/StickyFooter';
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import { Outlet } from "react-router-dom";
import {get} from './ApiConnection.jsx'

// Import some Bootstrap components
/*
import MainPage from './pages/MainPage';
import MovieDetailPage from './pages/MovieDetailPage'
import CreateAccountPage from './pages/CreateAccountPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LoginViewPage from './pages/LoginViewPage';
import GuestBookingPage from './pages/GuestBookingPage';
import BookingViewPage from './pages/BookingViewPage';
import TicketViewPage from './pages/TicketViewPage';
import LoggedInView from './pages/LoggedInView';
*/
export default function App() {

    const [globals, setGlobals] = useState({
        movies: []
    });

    useEffect(() => {
        (async () => {
            setGlobals({
                ...globals, movies: await get('movies')
            });
        })()
    }, []);

    return <body>
        <header>
            <MainMenu/>
        </header>
        <main className="h-100 d-flex justify-content-center align-content-center mt-3">
            <Outlet context={globals}/>
        </main>
        <StickyFooter/>
        
    </body>;
    /*
    return <>

        <body>
            <MainMenu />
            <main>
                <Router>
                      <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/LoginViewPage" element={<LoginViewPage />} />
                        <Route path="/MovieDetailPage" element={< MovieDetailPage/>} />
                        <Route path="/CreateAccountPage" element={< CreateAccountPage/>} />
                        <Route path="/ConfirmationPage" element={< ConfirmationPage/>} />
                        <Route path="/BookingViewPage" element={< BookingViewPage/>} />
                        <Route path="/GuestBookingPage" element={< GuestBookingPage/>} />
                        <Route path="/TicketViewPage" element={< TicketViewPage/>} />
                        <Route path="/LoggedInView" element={< LoggedInView/>} />
                    </Routes>
                </Router>
            </main>
            <StickyFooter/>
        </body>
        
    </>;
    */
}