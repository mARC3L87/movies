import { SEARCH_MOVIE } from './types';
import axios from 'axios';

//search for movie
export const onSearch = (text) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}&language=en-US&page=1&include_adult=false`
  );
  dispatch({
    type: SEARCH_MOVIE,
    payload: res.data.results,
  });
};
