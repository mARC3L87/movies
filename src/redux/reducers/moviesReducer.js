import { FETCH_LATEST } from '../actions/types';

const initialState = {
  latest: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST:
      return {
        ...state,
        latest: action.payload,
      };
    default:
      return state;
  }
};
