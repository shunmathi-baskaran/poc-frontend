import React, { useState, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Login from "login/LoginApp";
import Home from "./components/Home";
import { setLoginAppState, updatePhoneNo, setAccountInfoAppState } from "./store/actions/globalAction";
import { connect } from "react-redux"
import "./index.css"

const generateClassName = createGenerateClassName({
  seed: "co",
});

function App(props) {
  console.log("props container app", props)
 // const [accountNumber, setAccountNumber] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { loginAppState, accountInfoAppState, dispatch, history } = props
  // const transactionDetails = (accountNumber) => {
  //   setAccountNumber(accountNumber);
  // };
  // const [globalState, setGlobalState] = useState({
  //   loginAppState: {},
  //   accountInfoAppState: {},
  // });

  const manageGlobalStore = (appState, appName, action=null) => {
    console.log("appName", appName, "appstate", appState, "action", action);

    switch (appName) {
      case "LOGIN_APP": 
      if(action == null)
      dispatch(setLoginAppState(appState)) //action()
      else if(action === "UPDATE_PHONE_NO")
      dispatch(updatePhoneNo(appState))
        // setGlobalState((prevState) => ({
        //   ...prevState,
        //   loginAppState: appState,
        // }));
        break;
      case "ACCOUNTINFO_APP": dispatch(setAccountInfoAppState(appState))
        // setGlobalState((prevState) => ({
        //   ...prevState,
        //   accountInfoAppState: appState,
        // }));
        break;
      default:
        console.log("Never gonna happen");
    }
  };
  const onLoginSuccess = () => {
    setIsSignedIn(true);
    console.log("login succeeed");
    history.push("/home");
  };

  const onSignOut = () => {
    setIsSignedIn(false);
  };


  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        {console.log("globalState inside container-loginAppState", loginAppState)}
        {console.log("globalState inside container-accountInfoAppState", accountInfoAppState)}
        <Header onSignOut={onSignOut} isSignedIn={isSignedIn} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                 // transactionDetails={transactionDetails}
                  manageGlobalStore={manageGlobalStore}
                  customerInfo={loginAppState}
                  accountNumber={accountInfoAppState.selectedAccount}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Login
                  onLoginSuccess={onLoginSuccess}
                  manageGlobalStore={manageGlobalStore}
                />
              )}
            />
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  );
}

function mapStateToProps({ loginAppState, accountInfoAppState }){
    return {
        loginAppState,
        accountInfoAppState
    }
}
export default connect(mapStateToProps)(withRouter(App))

//export default withRouter(App);
