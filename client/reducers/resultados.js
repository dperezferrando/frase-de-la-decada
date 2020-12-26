import { Types } from "../actions/resultados";
import _ from "lodash";

 export default (state = { mostVoted: { frase: {}, isLoading: false } }, action) => {
    switch(action.type) {
      case Types.FETCH_MOST_VOTED:
        return {...state, mostVoted: { ...state.mostVoted, isLoading: true } }
      case Types.SET_MOST_VOTED:
        return {...state, mostVoted: { frase: action.mostVoted, isLoading: false} }
      default: return state;
    }
 }