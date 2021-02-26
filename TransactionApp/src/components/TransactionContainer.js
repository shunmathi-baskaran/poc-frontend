import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "./TransactionTable";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
     padding: "0.5em",
    backgroundColor:"#97144d",
    color:"white"
  },
});

export default ({ accountNumber }) => {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
      console.log("cdm called of transaction app");
    axios
      .post("http://localhost:3000/graphql", {
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
            `,
      })
      .then((result) => {
        setTransactions(result.data.data.getTransactions);
      });
  }, [accountNumber]);

  return (
    <React.Fragment>
    {console.log("Transactions", transactions)}
        <Typography variant="h6" className={classes.heading}>Transaction Details - {accountNumber}</Typography>
      {transactions === null ? (
        <Typography>No transactions</Typography>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </React.Fragment>
  );
};
