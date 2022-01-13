import {
  FETCH_LATEST,
  FETCH_HORROR,
  FETCH_COMEDY,
  FETCH_ACTION,
} from '../actions/types';

const initialState = {
  latest: [],
  horrors: [],
  comedies: [],
  actions: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST:
      return {
        ...state,
        latest: action.payload,
      };
    case FETCH_HORROR:
      return {
        ...state,
        horrors: action.payload,
      };
    case FETCH_COMEDY:
      return {
        ...state,
        comedies: action.payload,
      };
    case FETCH_ACTION:
      return {
        ...state,
        actions: action.payload,
      };
    default:
      return state;
  }
};
