import { ACCOUNTINFO_APP_SET_ACCOUNTS, ACCOUNTINFO_APP_SET_SELECTED_ACCOUNT } from "../actions/accountsinfo";

export function accounts(state = [], action) {
  switch (action.type) {
    case ACCOUNTINFO_APP_SET_ACCOUNTS:
      return action.accounts;
    default:
      return state;
  }
}

export function selectedAccount(state = null, action) {
  switch (action.type) {
    case ACCOUNTINFO_APP_SET_SELECTED_ACCOUNT:
      return action.accountNumber;
    default:
      return state;
  }
}
