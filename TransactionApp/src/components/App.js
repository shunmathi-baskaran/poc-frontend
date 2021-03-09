import React from 'react';
import TransactionContainer from './TransactionContainer'
import AddTransaction from "./AddTransaction"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router'

const generateClassName = createGenerateClassName({
    seed: 'trans'
})


export default  ({accountNumber}) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
        <Switch>
        <Route exact path="/home/add" render={() => <AddTransaction accountNumber={accountNumber}/>}></Route>
        <Route path="/" render={()=> <TransactionContainer accountNumber={accountNumber} />}></Route>
        </Switch>
        </StylesProvider>
    )
}