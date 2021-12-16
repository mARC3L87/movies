import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  useEffect(() => {
    const fetchedData = async () => {
      const data = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=98f29dc4d5fd78a97ba2280c05f789e2'
      );
      console.log(data.data.results);
    };
    fetchedData();
  }, []);
  return (
    <div>
      <Link to='/'>Landing</Link>
      <h1>Movie Page</h1>
    </div>
  );
};

export default Movies;
