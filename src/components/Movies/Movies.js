import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import './Movies.scss';

const Movies = ({ movies, genres, title }) => {
  const [count, setCounter] = useState(0);
  const movieGenre = genres.map((genre) => genre);
  const next = () => {
    if (count >= 57) {
      return;
    }
    setCounter(count + 4);
  };
  const prev = () => {
    if (count <= 0) {
      return;
    }
    setCounter(count - 4);
  };
  return (
    <section>
      <Link to='/'>Landing</Link>
      <h1>{title}</h1>

      <div className='movies-container'>
        <div className='buttons'>
          <button className='btn btn-prev' onClick={() => prev()}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='btn btn-next' onClick={() => next()}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
        <div
          className='movies-box'
          style={{
            transform: `translateX(-${count * (100 / movies.length)}%`,
          }}
        >
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieItem movie={movie} genre={movieGenre} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
Movies.defaultProps = {
  title: 'Some movies ...',
};
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movies;
