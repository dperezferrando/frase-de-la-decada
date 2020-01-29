import { combineReducers } from "redux";
import example from "./example";
import profile from "./profile";
import qualifiers from "./qualifiers";


const rootReducer = combineReducers({
  example,
  profile,
  qualifiers
})


export default rootReducer;