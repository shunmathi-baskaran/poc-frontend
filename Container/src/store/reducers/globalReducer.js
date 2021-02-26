import {
  CONTAINER_APP_SET_LOGIN,
  CONTAINER_APP_SET_ACCOUNTINFO,
  UPDATE_PHONE_NO
} from "../actions/globalAction";

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case CONTAINER_APP_SET_LOGIN:
      return action.loginAppState;
    case UPDATE_PHONE_NO:
        return {
            ...state,
            phoneNumber: action.phoneNumber
        }
    default:
      return state;
  }
}

export function accountInfoReducer(state = {}, action) {
  switch (action.type) {
    case CONTAINER_APP_SET_ACCOUNTINFO:
      return action.accInfoAppState;
    default:
      return state;
  }
}
