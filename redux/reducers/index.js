import { combineReducers } from "redux"
import testReducer from "./test";

const rootReducer = combineReducers({
  testReducer: testReducer,
});

export default rootReducer;