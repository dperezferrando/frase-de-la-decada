import { Types } from "../actions/groupStage";
import _ from "lodash";

 export default (state = { qualified: { results: [], isLoading: false }, votes: { results:[], isLoading: false }}, action) => {
    switch(action.type) {
      case Types.FETCH_QUALIFIED:
        return {...state, qualified: { ...state.qualified, isLoading: true } }
      case Types.SET_QUALIFIED:
        return {...state, qualified: { results: action.qualified, isLoading: false } }
      case Types.FETCH_VOTES:
        return {...state, votes: { ...state.votes, isLoading: true } }
      case Types.SET_VOTES:
        return {...state, votes: { ...state.votes, results: _.map(action.votes, ({ frases, ...other}) => ({ ...other, frases: _.map(frases, "frase" )})), isLoading: false } }
      default: return state;
    }
 }