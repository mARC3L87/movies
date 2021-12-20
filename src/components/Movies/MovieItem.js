import React from 'react';
import './MovieItem.scss';

const MovieItem = ({ movie, genre }) => {
  const getId = genre.map((genre) =>
    movie.genre_ids.filter((id) =>
      id === genre.id ? <p>{genre.name}</p> : null
    )
  );
  //console.log(getId);
  return (
    <div className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p className='movie-title'>{movie.title}</p>
      {getId}
      {/* {genre[0].id === movie.genre_id ? (
        <p className='movie-genre'>{genre[0].name}</p>
      ) : (
        <p className='movie-genre'>Nothing</p>
      )} */}
    </div>
  );
};

export default MovieItem;
