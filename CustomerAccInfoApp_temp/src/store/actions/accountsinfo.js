export const ACCOUNTINFO_APP_SET_ACCOUNTS= "ACCOUNTINFO_APP_SET_ACCOUNTS"
export const ACCOUNTINFO_APP_SET_SELECTED_ACCOUNT = "ACCOUNTINFO_APP_SET_SELECTED_ACCOUNT"

export function setAccounts(accounts){
    return ({
        type: ACCOUNTINFO_APP_SET_ACCOUNTS,
        accounts
    })
}

export function setSelectedAccount(accountNumber){
    return ({
        type: ACCOUNTINFO_APP_SET_SELECTED_ACCOUNT,
        accountNumber
    })
}