import { Types } from "../actions/resultados";
import _ from "lodash";

 export default (state = { mostVoted: { frase: {}, isLoading: false }, destacadas: {frases: [], isLoading: false }, stats: { frasesCount: {}, votesCount: {}, mostVoted: {}, isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_MOST_VOTED:
        return {...state, mostVoted: { ...state.mostVoted, isLoading: true } }
      case Types.SET_MOST_VOTED:
        return {...state, mostVoted: { frase: action.mostVoted, isLoading: false} }
      case Types.FETCH_DESTACADAS:
        return {...state, destacadas: { ...state.destacadas, isLoading: true } }
      case Types.SET_DESTACADAS:
        return {...state, destacadas: { frases: action.destacadas, isLoading: false} }
      case Types.FETCH_STATS:
        return {...state, stats: { ...state.stats, isLoading: true } }
      case Types.SET_STATS:
        return {...state, stats: { ...action.stats, isLoading: false} }
      default: return state;
    }
 }