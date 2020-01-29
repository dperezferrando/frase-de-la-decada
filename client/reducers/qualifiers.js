import { Types } from "../actions/qualifiers";

 export default (state = { frases: { results: [], isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_FRASES:
        return {...state, frases: { ...state.frases, isLoading: true } }
      case Types.SET_FRASES:
      console.log("GG",action.frases)
        return {...state, frases: { ...action.frases, isLoading: false } }
      default: return state;
    }
 }