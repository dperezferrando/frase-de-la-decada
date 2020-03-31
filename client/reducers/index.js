import { combineReducers } from "redux";
import example from "./example";
import profile from "./profile";
import qualifiers from "./qualifiers";
import qualifiersResults from "./qualifiersResults";
import groupStage from "./groupStage";
import bracketPhase from "./bracketPhase";


const rootReducer = combineReducers({
  example,
  profile,
  qualifiers,
  qualifiersResults,
  groupStage,
  bracketPhase
})


export default rootReducer;