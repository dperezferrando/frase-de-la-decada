import { Types } from "../actions/qualifiers";
import _ from "lodash";

 export default (state = { frases: { results: [], isLoading: true, alreadyLoadedOnce: false }, frasesAnio: { results: [], isLoading: true }, authors: { results: [], isLoading: false }, selected: [], votes: { results: [], isLoading: false }, preselection: { results: [], isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_FRASES:
        return {...state, frases: { ...state.frases, isLoading: true } }
      case Types.SET_FRASES:
        return {...state, frases: { ...action.frases, isLoading: false, alreadyLoadedOnce: true } }
      case Types.FETCH_FRASES_ANIO:
        return {...state, frasesAnio: { ...state.frasesAnio, isLoading: true } }
      case Types.SET_FRASES_ANIO:
        return {...state, frasesAnio: { ...action.frases, isLoading: false } }
      case Types.FETCH_AUTHORS:
        return {...state, authors: { ...state.authors, isLoading: true } }
      case Types.SET_AUTHORS:
        return {...state, authors: { ...state.authors, results: action.authors, isLoading: false } }
      case Types.SET_SELECTED:
        return {...state, selected: action.selected }
      case Types.FETCH_VOTES_QUALIFIERS:
        return {...state, votes: { ...state.votes, isLoading: true } }
      case Types.SET_VOTES_QUALIFIERS:
        return {...state, votes: { ...state.votes, results: _.isEmpty(action.votes) ? [] : _.map(action.votes[0].frases, "frase"), isLoading: false } }
      case Types.FETCH_PRESELECTION:
        return {...state, preselection: { ...state.preselection, isLoading: true } }
      case Types.SET_PRESELECTION:
        return {...state, preselection: { ...action.preselection, isLoading: false }, selected: [] }
      default: return state;
    }
 }