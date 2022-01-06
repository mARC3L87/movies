import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.scss';
import Spinner from '../Spinner/Spinner';

const MovieDetails = ({ movies, horrors }) => {
  const { id } = useParams();
  const results = [...movies, ...horrors];
  // const movie = movies.filter((movie) => movie.id === Number(id));
  // const horror = horrors.find((horror) => horror.id === Number(id));
  // console.log(movie[0]);
  // console.log(horror);
  const movie = results.find((result) => result.id === Number(id));
  if (!movie) {
    return <Spinner />;
  }
  return (
    <div className='background'>
      <img
        className='img-background'
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='movie-details-container'>
        <div className='img-container'>
          <img
            className='detail-img'
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className='text-container'>
          <h1 className='detail-title'>{movie.original_title}</h1>
          <p className='detail-rating'>
            <i className='far fa-star star'></i> {movie.vote_average}/10
          </p>
          <p className='detail-description'>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
