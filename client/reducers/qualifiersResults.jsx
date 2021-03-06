import { Types } from "../actions/qualifiersResults";
import _ from "lodash";

 export default (state = { results: { results: [], isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_RESULTS:
        return {...state, results: { ...state.results, isLoading: true } }
      case Types.SET_RESULTS:
        return {...state, results: { results: action.results, isLoading: false } }
      default: return state;
    }
 }