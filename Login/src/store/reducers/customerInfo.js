import { LOGIN_APP_SET_CUSTOMERINFO } from "../actions/customerInfo"

export default function customerInfo(state={}, action){
    switch(action.type) {
        case LOGIN_APP_SET_CUSTOMERINFO : 
        return {
            ...action.customerInfo
        }
        default: {
            return state
        }
    }
}