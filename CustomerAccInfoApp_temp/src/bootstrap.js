import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Root from './Root'

const mount = (el,  transactionDetails, customerInfo, manageGlobalStore) =>{
    ReactDOM.render( <Root  customerInfo={customerInfo} transactionDetails={transactionDetails} manageGlobalStore={manageGlobalStore} />, el )
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_customeraccinfo-dev-root')
    if(devRoot)
        mount(devRoot, 
            (accountNumber) => console.log(accountNumber),
            {
                customerId: 1000000,
                username: 'John',
                password: 'abcd',
                email: 'john@gmail.com',
                phoneNumber: '9876543212'
            }, (appState, appName, action=null) => console.log("appName", appName, "appstate", appState, "action", action))
}

export { mount }