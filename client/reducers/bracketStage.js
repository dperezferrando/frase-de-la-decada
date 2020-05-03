import { Types } from "../actions/bracketStage";
import _ from "lodash";

 export default (state = { votes: { results: [], isLoading: false }, matches: { results: [], isLoading: false }}, action) => {
    switch(action.type) {
      case Types.FETCH_MATCHES:
        return {...state, matches: { ...state.matches, isLoading: true } }
      case Types.SET_MATCHES:
        return {...state, matches: { results: action.matches, isLoading: false } }
      case Types.FETCH_VOTES:
        return {...state, votes: { ...state.votes, isLoading: true } }
      case Types.SET_VOTES:
        return {...state, votes: { ...state.votes, results: _.map(action.votes, ({ frases, ...other}) => ({ ...other, frases: _.map(frases, "frase" )})), isLoading: false } }
      default: return state;
    }
 }