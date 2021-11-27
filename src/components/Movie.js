import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, year, summary, genres, poster }) {
  return (
    <div>
      <div key={id}>
        <h4>
          <Link to={`/detail/${id}`}>
            {title} <small>({year})</small>
          </Link>
        </h4>
        <p>{summary}</p>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
        <img src={poster} alt="poster" />
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
