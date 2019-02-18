import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./stores";
import App from "./containers/app/App";
import * as serviceWorker from "./serviceWorker";

import "./styles/styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
