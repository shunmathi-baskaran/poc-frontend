import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

const mount = (el, {accountNumber}) => {
    ReactDOM.render(
        <App accountNumber={accountNumber} />,
        el
    )
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_transaction-dev-root');
    if(devRoot) {
        mount(devRoot, {
            accountNumber: "189873123456789"
        });
    }
}

export { mount }