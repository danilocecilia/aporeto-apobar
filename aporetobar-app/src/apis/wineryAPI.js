import fetch from "node-fetch";

import { actions } from "../actions";
import { config } from "../config";

export const wineryAPI = () => next => action => {
  const loadWines = async () => {
    console.log(config.ApiEndpoint);
    const response = await fetch(`${config.ApiEndpoint}/wines`, {
      method: "GET"
    }).then(response => response.json());
    console.log(response);
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.FETCH_WINES,
      wines: response
    });
  };

  const deleteWine = async id => {
    const response = await fetch(`${config.ApiEndpoint}/wines/${id}`, {
      method: "DELETE"
    }).then(response => response);
    console.log("Delete wine:", response);
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.DELETE_WINE
    });
  };

  const getWine = async id => {
    console.log(config.ApiEndpoint);
    const response = await fetch(`${config.ApiEndpoint}/wines/${id}`, {
      method: "GET"
    }).then(response => response.json());
    if (response.status === false) {
      return next({});
    }
    next({
      type: actions.GET_WINE,
      wine: response
    });
  };

  const updateWine = async productItem => {
    const { ID, name } = productItem;

    const response = await fetch(`${config.ApiEndpoint}/wines/${ID}`, {
      method: "PUT",
      body: JSON.stringify({ name })
    }).then(response => response);
    console.log("Update wine:", response);
    if (response.status === false) {
      return next({});
    }
  };

  next(action);
  switch (action.type) {
    case actions.FETCH_WINES: {
      loadWines();
      break;
    }
    case actions.GET_WINE: {
      getWine(action.id);
      break;
    }
    case actions.DELETE_WINE: {
      deleteWine(action.id);
      break;
    }
    case actions.UPDATE_WINE: {
      updateWine(action.productItem);
    }
    default:
      break;
  }
};
