import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';
import Spinner from '../Spinner/Spinner';

const SearchedMovies = ({ search }) => {
  console.log(search);
  if (!search || search.length === 0) {
    return <Spinner />;
  }
  return (
    <div>
      {search.map((element) => {
        return (
          <div key={element.id}>
            <SearchItem element={element} />
          </div>
        );
      })}
    </div>
  );
};

SearchedMovies.propTypes = {
  search: PropTypes.array.isRequired,
};

export default SearchedMovies;
