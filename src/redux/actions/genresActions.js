import { FETCH_GENRES } from './types';
import axios from 'axios';

export const fetchGenre = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  dispatch({
    type: FETCH_GENRES,
    payload: res.data.genres,
  });
};
