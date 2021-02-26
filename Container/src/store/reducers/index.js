import { combineReducers } from 'redux'
import { loginReducer, accountInfoReducer } from "./globalReducer"

export default combineReducers({
    loginAppState: loginReducer,
    accountInfoAppState: accountInfoReducer
})