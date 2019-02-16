import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { breweryAPI } from "./apis/breweryAPI";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [thunk, routerMiddleware(history), breweryAPI];

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
