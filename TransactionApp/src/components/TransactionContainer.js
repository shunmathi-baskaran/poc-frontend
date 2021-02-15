import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TransactionTable from './TransactionTable';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        margin: '1em',
        padding: '0.5em'
    }
});

export default ({accountNumber}) => {
    const classes = useStyles();
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
            <Typography variant="h6" className={classes.heading}>
                Transaction Details - {accountNumber}
            </Typography>
            <TransactionTable transactions= {transactions} />
            </React.Fragment>
          );
}
