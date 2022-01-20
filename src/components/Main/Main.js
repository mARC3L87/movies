import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchLatest,
  fetchHorror,
  fetchComedies,
  fetchActions,
} from '../../redux/actions/moviesActions';
import { fetchGenre } from '../../redux/actions/genresActions';
import PropTypes from 'prop-types';
import Movies from '../Movies/Movies';
import Search from '../Search/Search';
import './Main.scss';

const Main = ({
  movies: { latest, horrors, comedies, actions },
  fetchLatest,
  fetchHorror,
  fetchComedies,
  fetchActions,
  fetchGenre,
}) => {
  useEffect(() => {
    fetchLatest();
    fetchHorror();
    fetchComedies();
    fetchActions();
    fetchGenre();
  }, []);
  return (
    <div className='main'>
      <Link to='/'>Landing</Link>
      <div className='search-bar'>
        <Search />
      </div>
      <Movies movies={latest} title={'Now Playing'} />
      <Movies movies={horrors} title={'Horror'} />
      <Movies movies={comedies} title={'Comedy'} />
      <Movies movies={actions} title={'Action'} />
    </div>
  );
};
Main.propTypes = {
  movies: PropTypes.object.isRequired,
  fetchLatest: PropTypes.func.isRequired,
  fetchHorror: PropTypes.func.isRequired,
  fetchComedies: PropTypes.func.isRequired,
  fetchActions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {
  fetchLatest,
  fetchHorror,
  fetchComedies,
  fetchActions,
  fetchGenre,
})(Main);
