import fetch from "node-fetch";

import { actions } from "../actions";
import { config } from "../config";

export const breweryAPI = () => next => action => {
  const loadBeers = async () => {
    console.log(config.ApiEndpoint);
    const response = await fetch(`${config.ApiEndpoint}/beers`, {
      method: "GET"
    }).then(response => response.json());
    console.log(response);
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.FETCH_BEERS,
      beers: response
    });
  };

  const updateBeer = async productItem => {
    const { ID, name } = productItem;

    const response = await fetch(`${config.ApiEndpoint}/beers/${ID}`, {
      method: "PUT",
      body: JSON.stringify({ name })
    }).then(response => response);
    console.log("Update beer:", response);
    if (response.status === false) {
      return next({});
    }
  };

  const deleteBeer = async id => {
    const response = await fetch(`${config.ApiEndpoint}/beers/${id}`, {
      method: "DELETE"
    }).then(response => response);
    console.log("Delete beer:", response);
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.DELETE_BEER,
      beers: response
    });
  };

  const getBeer = async id => {
    console.log(config.ApiEndpoint);
    const response = await fetch(`${config.ApiEndpoint}/beers/${id}`, {
      method: "GET"
    }).then(response => response.json());
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.GET_BEER,
      beer: response
    });
  };

  next(action);

  switch (action.type) {
    case actions.FETCH_BEERS: {
      loadBeers();
      break;
    }
    case actions.GET_BEER: {
      getBeer(action.id);
      break;
    }
    case actions.DELETE_BEER: {
      deleteBeer(action.id);
      break;
    }
    case actions.UPDATE_BEER: {
      updateBeer(action.productItem);
      break;
    }
    default:
      break;
  }
};
