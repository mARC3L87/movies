import React from 'react';
import PropTypes from 'prop-types';

const SearchItem = ({ element }) => {
  return (
    <div>
      <h1>{element.title}</h1>
    </div>
  );
};

SearchItem.propTypes = {
  element: PropTypes.object.isRequired,
};

export default SearchItem;
