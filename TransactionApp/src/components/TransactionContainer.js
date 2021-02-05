import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TransactionTable from './TransactionTable';
import { Typography } from '@material-ui/core'


export default ({accountNumber}) => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:3000/graphql', {
            query: `
            query {
                getTransactions(accountNumber: "${accountNumber}"){
                    id
                    date
                    accountNumber
                    narration
                    type
                    amount
                }
              }
            `
        }).then((result) => {
            setTransactions(result.data.data.getTransactions)
          });
    }, [])

    return (
        <React.Fragment>
            <Typography variant="h6">
                Transactions
            </Typography>
            <TransactionTable transactions= {transactions} />
            </React.Fragment>
          );
}
