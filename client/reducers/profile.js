import { Types } from "../actions/profile";

 export default (state = { user: {} }, action) => {
    switch(action.type) {
      case Types.SET_USER:
        return {...state, user: action.user }
      default: return state;
    }
 }