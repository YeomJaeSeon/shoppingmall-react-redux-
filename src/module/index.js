import itemReducer from "./item";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ itemReducer });

export default rootReducer;
