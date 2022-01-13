import {
  FETCH_LATEST,
  FETCH_HORROR,
  FETCH_COMEDY,
  FETCH_ACTION,
} from './types';
import axios from 'axios';

//Fetch latest movies
export const fetchLatest = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );
  dispatch({
    type: FETCH_LATEST,
    payload: res.data.results,
  });
};

//Fetch horror movies
export const fetchHorror = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
  );
  dispatch({
    type: FETCH_HORROR,
    payload: res.data.results,
  });
};

//Fetch comedy movies
export const fetchComedies = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
  );
  dispatch({
    type: FETCH_COMEDY,
    payload: res.data.results,
  });
};

//Fetch action movies
export const fetchActions = () => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
  );
  dispatch({
    type: FETCH_ACTION,
    payload: res.data.results,
  });
};
