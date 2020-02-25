import { Types } from "../actions/groupStage";
import _ from "lodash";

 export default (state = { qualified: { results: [], isLoading: false }, sentVote: "" }, action) => {
    switch(action.type) {
      case Types.FETCH_QUALIFIED:
        return {...state, qualified: { ...state.qualified, isLoading: true } }
      case Types.SET_QUALIFIED:
        return {...state, qualified: { results: action.qualified, isLoading: false } }
      case Types.VOTE_GROUPSTAGE:
        return {...state, sentVote: action.group }
      default: return state;
    }
 }