const MovieList = ({}) => {
  const movies = ["Princess Bride", "Forrest Gump", "Iron Man"];
  const movieItems = movies.map((movie) => <div>{movie}</div>);

  return (
    <div>
      <h4>My Movies</h4>
      <div>{movieItems}</div>
    </div>
  );
};

export default MovieList;
