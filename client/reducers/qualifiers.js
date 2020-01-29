import { Types } from "../actions/qualifiers";

 export default (state = { frases: { results: [], isLoading: true }, frasesAnio: { results: [], isLoading: true } }, action) => {
    switch(action.type) {
      case Types.FETCH_FRASES:
        return {...state, frases: { ...state.frases, isLoading: true } }
      case Types.SET_FRASES:
        return {...state, frases: { ...action.frases, isLoading: false } }
      case Types.FETCH_FRASES_ANIO:
        return {...state, frasesAnio: { ...state.frasesAnio, isLoading: true } }
      case Types.SET_FRASES_ANIO:
        return {...state, frasesAnio: { ...action.frases, isLoading: false } }
      default: return state;
    }
 }