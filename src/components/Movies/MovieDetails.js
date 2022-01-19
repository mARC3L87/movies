import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieDetails.scss';
import Spinner from '../Spinner/Spinner';

const MovieDetails = ({
  movies: { latest, horrors, comedies, actions },
  search,
}) => {
  const { id } = useParams();
  const results = [...latest, ...horrors, ...comedies, ...actions, ...search];
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
MovieDetails.propTypes = {
  latest: PropTypes.array.isRequired,
  horrors: PropTypes.array.isRequired,
  comedies: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  search: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  search: state.search.search,
});

export default connect(mapStateToProps, {})(MovieDetails);
