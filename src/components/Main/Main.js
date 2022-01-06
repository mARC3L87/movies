import React from 'react';
import Movies from '../Movies/Movies';

const Main = ({ movies, genres }) => {
  return (
    <div>
      <Movies movies={movies} genres={genres} />
      <Movies movies={movies} genres={genres} />
      <Movies movies={movies} genres={genres} />
    </div>
  );
};

export default Main;
