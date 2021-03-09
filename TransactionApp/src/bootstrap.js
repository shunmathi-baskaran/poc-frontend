import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { Router } from 'react-router'

const mount = (el, {accountNumber, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    console.log("mount called of transaction app and history is", history)
    //bottom to top manipulation in container history.
    if(onNavigate)
     history.listen(onNavigate)

    ReactDOM.render(
        <Router history={history}><App accountNumber={accountNumber}/></Router>,
        el
    )

    return {
        onContainerNavigate( {pathname: nextPathName} ){
            const { pathname } = history.location
            if(pathname !== nextPathName)
                history.push(nextPathName)
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_transaction-dev-root');
    if(devRoot) {
        mount(devRoot, {
            accountNumber: "189873123456789",
            defaultHistory: createBrowserHistory()
        });
    }
}

export { mount }