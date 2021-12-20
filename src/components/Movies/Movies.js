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
      console.log(results);
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
  const movieGenre = genres.map((genre) => genre);
  return (
    <section>
      <Link to='/'>Landing</Link>
      <h1>Now Playing</h1>
      <div className='movies-box'>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieItem movie={movie} genre={movieGenre} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
