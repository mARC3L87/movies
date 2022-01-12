import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieItem.scss';

const MovieItem = ({ movie, genre }) => {
  const getName = (arr) => {
    const genreId = arr.map((id) => {
      const genreName = genre.filter((genreElement) => genreElement.id === id);
      if (genreName[0] === undefined) {
        return null;
      } else {
        return genreName[0].name;
      }
    });
    return genreId.join(', ');
  };
  return (
    <div className='movie-card'>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </Link>
      <Link to={`/movies/${movie.id}`} className='movie-title'>
        {movie.title}
      </Link>
      {/* <p className='movie-genre'>{getName(movie.genre_ids)}</p> */}
    </div>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  genre: PropTypes.array.isRequired,
};

export default MovieItem;
