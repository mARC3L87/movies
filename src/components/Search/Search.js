import React, { useState } from 'react';
import './Search.scss';

const Search = ({ onSearch }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder='Search movie...'
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Search;
