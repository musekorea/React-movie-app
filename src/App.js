import { LITERAL_TYPES } from '@babel/types';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const movieRaws = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );
      const movieJson = await movieRaws.json();
      setMovies(movieJson.data.movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className="App">
      <h1>REACT MOVIE APP</h1>
      <strong>{isLoading ? '⏰ Now is loading, please wait!!' : null}</strong>
      {isLoading ? null : (
        <section>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h4>
                {movie.title} <small>({movie.year})</small>
              </h4>
              <p>{movie.summary}</p>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
              <img src={movie.medium_cover_image} alt="post" />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
