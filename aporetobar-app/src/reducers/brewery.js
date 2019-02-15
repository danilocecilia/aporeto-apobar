const initialState = {
  beersList: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_BEERS":
      debugger;
      return { ...state, beers: action.beersList };
    default:
      return state;
  }
};

export const getBeers = () => {
  debugger;
  return dispatch => {
    debugger;
    dispatch({
      type: "GET_BEERS"
    });
  };
};
