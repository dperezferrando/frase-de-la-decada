import { Types } from "../actions/bracketPhase";
import _ from "lodash";

 export default (state = { votes: { results: [], isLoading: false }, eights: { results: [], isLoading: false }, fourths: { results: [], isLoading: false }, semi: { results: [], isLoading: false }, final: { results: [], isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_MATCHES:
        return {...state, [action.phase]: { ...state[action.phase], isLoading: true } }
      case Types.SET_MATCHES:
        return {...state, [action.phase]: { results: action.matches, isLoading: false } }
      case Types.FETCH_VOTES:
        return {...state, votes: { ...state.votes, isLoading: true } }
      case Types.SET_VOTES:
        return {...state, votes: { ...state.votes, results: _.map(action.votes, ({ frases, ...other}) => ({ ...other, frases: _.map(frases, "frase" )})), isLoading: false } }
      default: return state;
    }
 }