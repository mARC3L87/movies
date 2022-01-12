import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLatest } from '../../redux/actions/moviesActions';
import PropTypes from 'prop-types';
import Movies from '../Movies/Movies';
import Search from '../Search/Search';
import './Main.scss';

// const Main = ({ latest, genres, horrors, comedies, actions, onSearch }) => {
//   return (
//     <div className='main'>
//       <Link to='/'>Landing</Link>
//       <div className='search-bar'>
//         <Search onSearch={onSearch} />
//       </div>
//       <Movies movies={latest} genres={genres} title={'Now Playing'} />
//       <Movies movies={horrors} genres={genres} title={'Horror'} />
//       <Movies movies={comedies} genres={genres} title={'Comedy'} />
//       <Movies movies={actions} genres={genres} title={'Action'} />
//     </div>
//   );
// };
const Main = ({ movies: { latest }, fetchLatest }) => {
  useEffect(() => {
    console.log(fetchLatest());
    // console.log(latest);
  }, []);
  return (
    <div className='main'>
      <Link to='/'>Landing</Link>
      <div className='search-bar'>{/* <Search onSearch={onSearch} /> */}</div>
      <Movies movies={latest} />
      {/* <Movies movies={horrors} genres={genres} title={'Horror'} />
      <Movies movies={comedies} genres={genres} title={'Comedy'} />
      <Movies movies={actions} genres={genres} title={'Action'} /> */}
    </div>
  );
};
Main.propTypes = {
  latest: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  horrors: PropTypes.array.isRequired,
  comedies: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { fetchLatest })(Main);
