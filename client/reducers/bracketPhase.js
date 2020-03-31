import { Types } from "../actions/bracketPhase";
import _ from "lodash";

 export default (state = { eights: { results: [], isLoading: false }, fourths: { results: [], isLoading: false }, semi: { results: [], isLoading: false }, final: { results: [], isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_MATCHES:
        return {...state, [action.phase]: { ...state[action.phase], isLoading: true } }
      case Types.SET_MATCHES:
        return {...state, [action.phase]: { results: action.matches, isLoading: false } }
      default: return state;
    }
 }