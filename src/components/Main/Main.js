import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movies from '../Movies/Movies';
import Search from '../Search/Search';
import './Main.scss';

const Main = ({ latest, genres, horrors, comedies, actions, onSearch }) => {
  return (
    <div className='main'>
      <Link to='/'>Landing</Link>
      <div className='search-bar'>
        <Search onSearch={onSearch} />
      </div>
      <Movies movies={latest} genres={genres} title={'Now Playing'} />
      <Movies movies={horrors} genres={genres} title={'Horror'} />
      <Movies movies={comedies} genres={genres} title={'Comedy'} />
      <Movies movies={actions} genres={genres} title={'Action'} />
    </div>
  );
};
Main.propTypes = {
  latest: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  horrors: PropTypes.array.isRequired,
};

export default Main;
