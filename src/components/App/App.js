import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import MovieDetails from '../Movies/MovieDetails';
import SearchedMovies from '../SearchedMovies/SearchedMovies';
import Main from '../Main/Main';
import './App.scss';

const App = () => {
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
