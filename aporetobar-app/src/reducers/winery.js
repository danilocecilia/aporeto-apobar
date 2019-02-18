import { actions } from "../actions";

const initialState = {
  wines: [],
  wine: {}
};

export default (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case actions.FETCH_WINES: {
        return { ...state, wines: action.wines };
      }
      case actions.GET_WINE: {
        return { ...state, wine: action.wine };
      }
      case actions.DELETE_WINE: {
        const updateWines = state.wines.filter(wine => wine.ID !== action.id);
        return { ...state, wines: updateWines };
      }
      case actions.UPDATE_WINE: {
        const index = state.wines.findIndex(
          wine => wine.ID === action.productItem.ID
        );
        const newWines = [...state.wines];
        newWines[index].name = action.productItem.name;
        return { ...state, wines: newWines };
      }
      default:
        return state;
    }
  }
};

export const getWines = () => {
  return dispatch => {
    dispatch({
      type: actions.FETCH_WINES
    });
  };
};

export const getWine = id => {
  return dispatch => {
    dispatch({
      type: actions.GET_WINE
    });
  };
};

export const deleteWine = id => {
  return dispatch => {
    dispatch({
      type: actions.DELETE_WINE,
      id
    });
  };
};

export const updateWine = productItem => {
  return dispatch => {
    dispatch({
      type: actions.UPDATE_WINE,
      productItem
    });
  };
};
