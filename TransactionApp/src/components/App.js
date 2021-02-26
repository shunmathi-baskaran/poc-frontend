import React from 'react';
import TransactionContainer from './TransactionContainer'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    seed: 'trans'
})


export default  ({accountNumber}) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <TransactionContainer accountNumber={accountNumber} />
        </StylesProvider>
    )
}