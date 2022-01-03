import React from 'react';
import './MovieItem.scss';

const MovieItem = ({ movie, genre }) => {
  const getName = (arr) => {
    const genreId = arr.map((id) => {
      const genreName = genre.filter((genreElement) => genreElement.id === id);
      //console.log(genreName);
      return genreName[0];
    });
    //console.log(genreId.join(', '));
    return genreId.join(', ');
  };
  return (
    <div className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-genre'>{getName(movie.genre_ids)}</p>
    </div>
  );
};

export default MovieItem;
