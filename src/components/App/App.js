import { React, useState, useEffect } from 'react';
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
  const [latest, setLatest] = useState([]);
  const [genres, setGenres] = useState([]);
  const [horrors, setHorrors] = useState([]);
  const [comedies, setComedies] = useState([]);
  const [actions, setActions] = useState([]);
  const [search, setSearch] = useState([]);

  const onSearch = async (text) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}&language=en-US&page=1&include_adult=false`
    );
    const { results } = res.data;
    setSearch(results);
  };
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/movies' element={<Main />} />
      <Route path='/movies/:id' element={<MovieDetails />} />
      <Route
        path='/movies/search'
        element={<SearchedMovies search={search} onSearch={onSearch} />}
      />
      <Route
        path='/movies/search/:id'
        element={
          <MovieDetails
            search={search}
            latest={latest}
            horrors={horrors}
            comedies={comedies}
            actions={actions}
          />
        }
      />
    </Routes>
  );
};

export default App;
