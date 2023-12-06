import "./App.css";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";

function App() {
    const selectedMovie = {
        title: "Forrest Bump",
        runningTime: 142,
        genre: "Romantic Drama",
    };

    return (
        <div className="App">
            <Header />
            <div className="flex-container">
                <MovieList />
                <MovieInfo movieObj={selectedMovie} />
                <NewMovieForm />
            </div>
        </div>
    );
}

export default App;
