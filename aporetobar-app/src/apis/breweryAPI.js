import fetch from "node-fetch";

import { actions } from "../actions";
import { config } from "../config";

export const breweryAPI = () => next => action => {
  const loadBeers = async () => {
    debugger;
    console.log(config.ApiEndpoint);
    const response = await fetch(`${config.ApiEndpoint}/beers`, {
      method: "GET"
    }).then(response => response.json());
    if (response.status === false) {
      debugger;
      return next({});
    }
    next({
      type: actions.FETCH_BEERS,
      beers: response
    });
  };
  next(action);

  switch (action.type) {
    case actions.FETCH_BEERS: {
      loadBeers();
      break;
    }
    default:
      break;
  }
};
