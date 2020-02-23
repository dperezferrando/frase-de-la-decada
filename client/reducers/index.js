import { combineReducers } from "redux";
import example from "./example";
import profile from "./profile";
import qualifiers from "./qualifiers";
import qualifiersResults from "./qualifiersResults";


const rootReducer = combineReducers({
  example,
  profile,
  qualifiers,
  qualifiersResults
})


export default rootReducer;