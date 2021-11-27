import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Detail() {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const movieFetch = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const movieJson = await movieFetch.json();
      setMovie(movieJson.data.movie);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <strong>{isLoading ? '⏰ Now is loading, please wait!!' : null}</strong>
      {isLoading ? null : (
        <section>
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            summary={movie.description_full}
            genres={movie.genres}
            poster={movie.medium_cover_image}
          />
        </section>
      )}
    </div>
  );
}

export default Detail;
