import fetch from "node-fetch";
import { actions } from "../actions";
import { config } from "../config";
import store from "../stores";

export const breweryAPI = () => next => action => {
  // const updateBeer = async(id) => {
  //     const response = await fetch(`${config.ApiEndPoint}/beers`, {
  //         method: "PUT",
  //         body: JSON.stringify({id})
  //     })
  // }
  const getAllBeers = async () => {
    const response = await fetch(`${config.ApiEndPoint}`, {
      method: "GET"
    }).then(response => {
      response.json();
      debugger;
    });
    if (response === false) {
      debugger;
    }
    next({
      type: "GET_BEERS"
    });
  };
};
