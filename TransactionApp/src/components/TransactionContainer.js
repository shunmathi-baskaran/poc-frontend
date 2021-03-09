import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "./TransactionTable";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link }from "react-router-dom"

const useStyles = makeStyles({
  heading: {
    //textAlign: "center",
    padding: "0.8em",
    color: "white",
  },
  addTransBtn: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
  },

  header: {
    backgroundColor: "#97144d",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  msg: {
    margin: "1em",
    textAlign: "center",
  },
});

export default ({ accountNumber }) => {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3000/graphql", {
        query: `
            query {
                getTransactions(accountNumber: "${accountNumber}"){
                    _id
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
      <div className={classes.header}>
        <Typography variant="h6" className={classes.heading}>
          Transaction Details - {accountNumber}
        </Typography>
        <Link to="/home/add">
        <Button
          className={classes.addTransBtn}
          variant="contained"
          color="secondary"
        >
          Add Transaction
        </Button>
        </Link>
      </div>
      {transactions === null ? (
        <Typography className={classes.msg}>No transactions</Typography>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </React.Fragment>
  );
};
