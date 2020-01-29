import { combineReducers } from "redux";
import example from "./example";
import profile from "./profile";


const rootReducer = combineReducers({
  example,
  profile
})


export default rootReducer;