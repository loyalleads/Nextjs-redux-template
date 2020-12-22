import { combineReducers } from "redux"
import userReducer from "./user";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  userReducer,
  counterReducer
});

export default rootReducer;