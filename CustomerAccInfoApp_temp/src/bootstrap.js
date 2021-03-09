import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

const mount = (el, customerInfo, manageGlobalStore) =>{
    ReactDOM.render( <Root customerInfo={customerInfo} manageGlobalStore={manageGlobalStore} />, el )
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_customeraccinfo-dev-root')
    if(devRoot)
        mount(devRoot, 
            {
                customerId: 1000000,
                username: 'John',
                password: 'abcd',
                email: 'john@gmail.com',
                phoneNumber: '9876543212'
            }, (appState, appName, action=null) => console.log("appName", appName, "appstate", appState, "action", action))
}

export { mount }