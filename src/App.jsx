import "./App.css";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";

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
            </div>
        </div>
    );
}

export default App;
