import { Types } from "../actions/profile";

 export default (state = { user: { voted: {} }, isLoading: true }, action) => {
    switch(action.type) {
      case Types.FETCH_USER:
        return {...state, isLoading: true }
      case Types.SET_USER:
        return {...state, user: action.user, isLoading: false }
      default: return state;
    }
 }