import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import MovieDetails from '../Movies/MovieDetails';
import Main from '../Main/Main';
import './App.scss';
import axios from 'axios';

const App = () => {
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
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/movies'
          element={<Main movies={movies} genres={genres} />}
        />
        <Route path='/movies/:id' element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
