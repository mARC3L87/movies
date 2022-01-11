import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchItem.scss';

const SearchItem = ({ element }) => {
  const getYear = (date) => {
    const year = date.slice(0, 4);
    return year;
  };
  return (
    <div
      className={
        element.backdrop_path === null ? 'deactive' : 'search-item-card'
      }
    >
      {element.backdrop_path && element.title && element.release_date && (
        <div>
          <Link to={`/movies/search/${element.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`}
              alt={element.title}
            />
          </Link>
          <div className='search-item-description'>
            <Link
              className='search-item-title'
              to={`/movies/search/${element.id}`}
            >
              {element.title}
            </Link>
            <p className='search-item-release'>
              ({getYear(element.release_date)})
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

SearchItem.propTypes = {
  element: PropTypes.object.isRequired,
};

export default SearchItem;
