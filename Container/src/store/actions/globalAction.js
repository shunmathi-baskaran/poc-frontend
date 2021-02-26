export const CONTAINER_APP_SET_LOGIN = "CONTAINER_APP_SET_LOGIN"
export const CONTAINER_APP_SET_ACCOUNTINFO = "CONTAINER_APP_SET_ACCOUNTINFO"
export const UPDATE_PHONE_NO = "UPDATE_PHONE_NO"

export function setLoginAppState(loginAppState){
    return ({
        type: CONTAINER_APP_SET_LOGIN,
        loginAppState
    })
}

export function updatePhoneNo(phoneNumber){
    return ({
        type: UPDATE_PHONE_NO,
        phoneNumber
    })
}

export function setAccountInfoAppState(accInfoAppState){
    return ({
        type: CONTAINER_APP_SET_ACCOUNTINFO,
        accInfoAppState
    })
}