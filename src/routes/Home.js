import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

const Home = () => {
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
    <div>
      <h1>REACT MOVIE APP</h1>
      <strong>{isLoading ? '⏰ Now is loading, please wait!!' : null}</strong>
      {isLoading ? null : (
        <section>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                poster={movie.medium_cover_image}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Home;
