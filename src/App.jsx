import './App.css';
import Header from './components/Header/Header';
import MovieInfo from './components/MovieInfo/MovieInfo';
import MovieList from './components/MovieList/MovieList';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [movies, setMovies] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7276/api/movies'
            );
            setMovies(response.data);
        } catch (error) {
            console.warn('Error in fetchMovies request: ', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const selectedMovie = movies[activeIndex];

    return (
        <div className='App'>
            <Header />
            <div className='flex-container'>
                <MovieList
                    movies={movies}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
                <MovieInfo movieObj={selectedMovie} />
                <NewMovieForm onNewMovie={fetchMovies} />
            </div>
        </div>
    );
}

export default App;
