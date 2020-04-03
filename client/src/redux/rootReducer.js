import { combineReducers } from "redux";
import { bikesReducer } from "./bikesReducer";

export const rootReducer = combineReducers({
  bikes: bikesReducer
});
