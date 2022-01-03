import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import axios from 'axios';
import './Movies.scss';

const Movies = () => {
  useEffect(() => {
    const fetchedData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const { results } = res.data;
      setMovies(results);
    };
    const fetchGenre = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const { genres } = res.data;
      setGenres(genres);
    };
    fetchedData();
    fetchGenre();
  }, []);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [count, setCounter] = useState(0);
  const movieGenre = genres.map((genre) => genre);
  const next = () => {
    if (count >= 57) {
      return;
    }
    setCounter(count + 4);
  };
  const prev = () => {
    if (count <= 0) {
      return;
    }
    setCounter(count - 4);
  };
  return (
    <section>
      <Link to='/'>Landing</Link>
      <h1>Now Playing</h1>

      <div className='movies-container'>
        <div className='buttons'>
          <button className='btn btn-prev' onClick={() => prev()}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='btn btn-next' onClick={() => next()}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
        <div
          className='movies-box'
          style={{
            transform: `translateX(-${count * (100 / movies.length)}%`,
          }}
        >
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieItem movie={movie} genre={movieGenre} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
