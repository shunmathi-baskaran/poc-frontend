import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Redirect } from "react-router"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "50%",
    margin: "auto",
    padding: theme.spacing(2),
    textAlign: "center",
    border: "6px solid #97144d",
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
    color: "#97144d",
    fontWeight: "bold",
  },
}));

export default function AddTransaction(props) {
  console.log("props", props);
  const classes = useStyles();
  const [state, setState] = useState({
    accountNumber: props.accountNumber,
    date: "",
    narration: "",
    type: "",
    amount: ""
  });
  const [redirect, setRedirect] = useState(false);

  const setTransactionDate = (event) => {
    const date = event.target.value;
    setState((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleNarration = (event) => {
    const narration = event.target.value;
    setState((prevState) => ({
      ...prevState,
      narration,
    }));
  };

  const handleTransactionType = (event) => {
    const type = event.target.value;
    setState((prevState) => ({
      ...prevState,
      type,
    }));
  };

  const handleAmount = (event) => {
    const amount = event.target.value;
    setState((prevState) => ({
      ...prevState,
      amount,
    }));
  };

  const addTransaction = () => {
    const query = `
      mutation addTransaction($input: TransactionInput){
          addTransaction(input: $input){
              date
              accountNumber
              narration
              type
              amount
          }
        }
      `;
    console.log(query);
    console.log(state);
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: {
          input: state,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        //props.history.push('/')
        setRedirect(true)
      );
  };
  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <div className={classes.root}>
      {console.log(state)}
      <form>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: "#97144d", color: "white" }}
          >
            <Typography>Transaction Details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Select Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="date"
              name="date"
              type="date"
              autoComplete="date"
              value={state.date}
              // inputProps={{ max:date}}
              onChange={setTransactionDate}
              onKeyPress={(event) => event.preventDefault()}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Select Narration</Typography>
          </Grid>
          <Grid item xs={6}>
            <Select
              variant="outlined"
              labelId="narration"
              id="narration"
              value={state.narration}
              onChange={handleNarration}
            >
              <MenuItem value="atm">ATM</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
              <MenuItem value="pos">POS</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography>Transaction Type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Select
              variant="outlined"
              labelId="trans-type"
              id="trans-type"
              value={state.transactionType}
              onChange={handleTransactionType}
            >
              <MenuItem value="crt">Credit</MenuItem>
              <MenuItem value="dbt">Debit</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography>Amount</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              id="amt"
              type="number"
              value={state.amount}
              onChange={handleAmount}
            />
          </Grid>
        </Grid>
        <Button
          onClick={addTransaction}
          variant="contained"
          color="secondary"
          style={{ marginTop: 20 }}
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
}
