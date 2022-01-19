import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';
import Spinner from '../Spinner/Spinner';
import { onSearch } from '../../redux/actions/searchActions';
import Search from '../Search/Search';
import './SearchedMovies.scss';

const SearchedMovies = ({ search, onSearch }) => {
  console.log(search);
  if (!search || search.length === 0) {
    return <Spinner />;
  }
  return (
    <div>
      <div className='searched-bar'>
        <Search onSearch={onSearch} />
      </div>
      <div className='searched-box'>
        {search.map((element) => {
          return (
            <div key={element.id}>
              <SearchItem element={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

SearchedMovies.propTypes = {
  search: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search.search,
});

export default connect(mapStateToProps, { onSearch })(SearchedMovies);
