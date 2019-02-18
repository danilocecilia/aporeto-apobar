import { actions } from "../actions";

const initialState = {
  beers: [],
  beer: {}
};

export default (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case actions.FETCH_BEERS: {
        return { ...state, beers: action.beers };
      }
      case actions.GET_BEER: {
        return { ...state, beer: action.beer };
      }
      case actions.DELETE_BEER: {
        const updateBeers = state.beers.filter(beer => beer.ID !== action.id);
        return { ...state, beers: updateBeers };
      }
      case actions.UPDATE_BEER: {
        const index = state.beers.findIndex(
          wine => wine.ID === action.productItem.ID
        );
        const newBeers = [...state.beers];
        newBeers[index].name = action.productItem.name;
        return { ...state, beers: newBeers };
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

export const getBeer = id => {
  return dispatch => {
    dispatch({
      type: actions.GET_BEER
    });
  };
};

export const deleteBeer = id => {
  return dispatch => {
    dispatch({
      type: actions.DELETE_BEER,
      id
    });
  };
};

export const updateBeer = productItem => {
  return dispatch => {
    dispatch({
      type: actions.UPDATE_BEER,
      productItem
    });
  };
};
