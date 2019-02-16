import { combineReducers } from "redux";
import brewery from "./brewery";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    brewery,
    router: connectRouter(history)
    // login,
    // pages,
    // categories,
    // items
  });

export default rootReducer;
