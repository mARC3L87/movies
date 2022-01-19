import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import MovieDetails from '../Movies/MovieDetails';
import SearchedMovies from '../SearchedMovies/SearchedMovies';
import Main from '../Main/Main';
import './App.scss';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchGenre = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const { genres } = res.data;
      setGenres(genres);
    };
    fetchGenre();
  }, []);
  const [genres, setGenres] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/movies' element={<Main />} />
      <Route path='/movies/:id' element={<MovieDetails />} />
      <Route path='/movies/search' element={<SearchedMovies />} />
      <Route path='/movies/search/:id' element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
