import "./App.css";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo title="Forrest Gump" runningTime="142" genre="Romance" />
    </div>
  );
}

export default App;
