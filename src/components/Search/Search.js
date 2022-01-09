import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = ({ onSearch }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('Please enter some text.');
    } else {
      onSearch(text);
      navigate('/movies/search');
    }
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
