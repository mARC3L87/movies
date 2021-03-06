import { SEARCH_MOVIE } from '../actions/types';

const initialState = {
  search: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
