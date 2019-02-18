import { combineReducers } from "redux";
import brewery from "./brewery";
import winery from "./winery";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    brewery,
    winery,
    router: connectRouter(history)
  });

export default rootReducer;
