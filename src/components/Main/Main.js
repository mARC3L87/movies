import React from 'react';
import PropTypes from 'prop-types';
import Movies from '../Movies/Movies';

const Main = ({ movies, genres, horrors }) => {
  return (
    <div>
      <Movies movies={movies} genres={genres} title={'Now Playing'} />
      <Movies movies={horrors} genres={genres} title={'Horrors'} />
      <Movies movies={movies} genres={genres} title={'Comedy'} />
    </div>
  );
};
Main.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  horrors: PropTypes.array.isRequired,
};

export default Main;
