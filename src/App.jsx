import "./App.css";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import initData from "./data/data";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(initData);
    }, []);

    const handleNewMovie = (newMovie) => {
        const updatedMovies = [...movies, newMovie];
        setMovies(updatedMovies);
    };

    const selectedMovie = {
        title: "Forrest Gump",
        runningTime: 142,
        genre: "Romantic Drama",
    };

    return (
        <div className="App">
            <Header />
            <div className="flex-container">
                <MovieList movies={movies} />
                <MovieInfo movieObj={selectedMovie} />
                <NewMovieForm onNewMovie={handleNewMovie} />
            </div>
        </div>
    );
}

export default App;
