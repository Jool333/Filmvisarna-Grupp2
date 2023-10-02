// Only import your sass in App (not every component)
import "./sass/main.scss";
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Import some Bootstrap components
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import Footer from "./components/Footer/Footer";

const [movies, setMovies] = useState({
    movies: []
  });

  // fetch things we want in globals (for now just products)
  useEffect(() => {
    (async () => {
      setMovies({
        ...movies,
        movies: await get('products.json')
      });
    })();
  }, []);

export default function App() {

    return( <>
        <header>
            <MainMenu/>
        </header>
        <main className="container mt-5">
            <Outlet context={movies}/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
    );
}
