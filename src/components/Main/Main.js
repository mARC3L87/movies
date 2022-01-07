import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movies from '../Movies/Movies';

const Main = ({ movies, genres, horrors, comedies, actions }) => {
  return (
    <div>
      <Link to='/'>Landing</Link>
      <Movies movies={movies} genres={genres} title={'Now Playing'} />
      <Movies movies={horrors} genres={genres} title={'Horror'} />
      <Movies movies={comedies} genres={genres} title={'Comedy'} />
      <Movies movies={actions} genres={genres} title={'Action'} />
    </div>
  );
};
Main.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  horrors: PropTypes.array.isRequired,
};

export default Main;
