import { combineReducers } from 'redux'
import { accounts, selectedAccount } from "./accountsInfo"

export default combineReducers({
    accounts,
    selectedAccount
})