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
        (async () => {
            await post('sessions');
            setGlobals({
                ...globals,
                movies: await get('movies'),
                user: await get('sessions')
            });
        })()
    }, []);
    console.log(globals.user)
    return <>
        <header>
            <MainMenu />
        </header>
        <main className="h-100 d-flex justify-content-center align-content-center mt-3">
            <Outlet context={globals} />
        </main>
        <StickyFooter />

    </>;
}