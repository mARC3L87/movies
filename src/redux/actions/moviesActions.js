import { FETCH_LATEST } from './types';
import axios from 'axios';

export const fetchLatest = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );
  dispatch({
    type: FETCH_LATEST,
    payload: res.data.results,
  });
};
