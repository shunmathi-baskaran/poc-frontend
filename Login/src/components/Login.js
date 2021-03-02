import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputField from "./InputFields";
import { connect } from "react-redux"
import { dispatchCustomerInfo } from "../store/actions/customerInfo"
//import { loginContext } from "../bootstrap"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#97144d"
  },
}));

export const Login = ({ dispatch, manageGlobalStore, onLoginSuccess, storeState }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const {name, value} = event.target;
    if (name === "email")
      setState((prevState) => ({
        ...prevState,
        email: value,
      }));
    else
      setState((prevState) => ({
        ...prevState,
        password: value,
      }));
  };
  
  useEffect(() =>{
    console.log("useEffect executed. LoginApp storestate", storeState)
    manageGlobalStore(storeState, "LOGIN_APP")
  }, [storeState])

  useEffect(() =>{
     console.log("loginApp mounted")
   }, [])

  const handleSubmit = (event) => {
   event.preventDefault();
    const query = `query {
    getCustomerInfo(email: "${state.email}", password: "${state.password}") {
        customerId
        username
        email
        phoneNumber
    }
  }`;

    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => {
        const customerDetails = res.data.getCustomerInfo;
        //dispatching to login apps store.
      //  onLoginSuccess(customerDetails); //home
        dispatch(dispatchCustomerInfo(customerDetails))
        //.then(() => manageGlobalStore(storeState, "LOGIN_APP"));
        .then(() => onLoginSuccess());
     //  console.log("props just after dispatch", props);
      })
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    {console.log("login rendering")}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <InputField email="email" value={state.email} onChange={onChange} />
          <InputField
            password="password"
            value={state.password}
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

function mapStateToProps(state){
  return { storeState : state}
}

export default connect(mapStateToProps)(Login);