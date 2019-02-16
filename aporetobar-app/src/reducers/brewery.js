import { actions } from "../actions";

const initialState = {
  beers: []
};

export default (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case actions.FETCH_BEERS: {
        return { ...state, beers: action.beers };
      }
      default:
        return state;
    }
  }
};

export const getBeers = () => {
  return dispatch => {
    dispatch({
      type: actions.FETCH_BEERS
    });
  };
};
