// Only import your sass in App (not every component)
import "./sass/main.scss";
import React, { useEffect, useState } from 'react';
import StickyFooter from './components/StickyFooter/StickyFooter';
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import { Outlet } from "react-router-dom";
import { get, post } from './ApiConnection.jsx';

export default function App() {
    const [loading, setLoading] = useState(true);
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
                await setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
            loading ? console.log() : console.log(globals)
        };

        fetchData();
    }, []);

    console.log(globals.user)
    return <>
        <header>
            <MainMenu />
        </header>
        <main className="h-100 d-flex justify-content-center align-content-center mt-3">
            {loading ? <>Loading</> : <Outlet context={globals} />}

        </main>
        <StickyFooter />

    </>;
}