import { Types } from "../actions/home";
import _ from "lodash";

 export default (state = { news: { results: [], isLoading: false }}, action) => {
    switch(action.type) {
      case Types.FETCH_NEWS:
        return {...state, news: { ...state.news, isLoading: true } }
      case Types.SET_NEWS:
        return {...state, news: { results: action.news, isLoading: false } }
      default: return state;
    }
 }