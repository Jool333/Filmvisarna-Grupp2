// Only import your sass in App (not every component)
import "./sass/main.scss";
import React, { useEffect, useState } from 'react';
import StickyFooter from './components/StickyFooter/StickyFooter';
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import { Outlet } from "react-router-dom";
import { get, post } from './ApiConnection.jsx';

export default function App() {

    const [globals, setGlobals] = useState({
        movies: [],
        user: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await post('sessions');
                const movies = await get('movies');
                const user = await get('sessions');
                await setGlobals({ movies, user });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    //console.log(globals.user)
    return <>
        <header>
            <MainMenu user={globals.user} />
        </header>
        <main className="h-100 d-flex justify-content-center align-content-center mt-3">
            <Outlet context={globals} />
        </main>
        <StickyFooter />

    </>;
}