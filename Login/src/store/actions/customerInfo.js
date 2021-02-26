export const LOGIN_APP_SET_CUSTOMERINFO = "LOGIN_APP_SET_CUSTOMERINFO"

export function setCustomerInfo(customerInfo){
    return ({
        type: LOGIN_APP_SET_CUSTOMERINFO,
        customerInfo
    })
}

export function dispatchCustomerInfo(customerInfo) {
    return dispatch => {
      return new Promise((resolve, reject) => {
       dispatch(setCustomerInfo(customerInfo))
        resolve()
      });
    }
  }