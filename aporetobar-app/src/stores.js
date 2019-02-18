import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { breweryAPI } from "./apis/breweryAPI";
import { wineryAPI } from "./apis/wineryAPI";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [thunk, routerMiddleware(history), breweryAPI, wineryAPI];

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  return store;
}
