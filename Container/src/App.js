import React, { useState, lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Login from 'login/LoginApp'
import CustomerAccInfoApp from 'customerAccInfo/CustomerAccInfoApp'
import TransactionApp from './components/TransactionApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

function App (props) {
    const [accountNumber, setAccountNumber] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const transactionDetails = (accountNumber) => {
        setAccountNumber(accountNumber);
    };
    const [customerInfo, setCustomerInfo] = useState({});
    const onLoginSuccess = (customerDetails) => {
        setCustomerInfo(customerDetails);
        setIsSignedIn(true);
        props.history.push('/home')
        console.log("login succeeed")
    }
    
    const onSignOut = () => {
        setIsSignedIn(false);
    }

const Home = () => {
    return (
        <StylesProvider>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <CustomerAccInfoApp transactionDetails ={transactionDetails} 
                    customerInfo =  {customerInfo}
                />
                <div>
                    {accountNumber !== null 
                    ? <TransactionApp accountNumber={accountNumber}/> 
                    : <div style={{margin:'1em'}}>Please click on View Transactions on any account on <b>Account Information</b> tab to view transaction details</div>
                    }
                </div>
            </div>
        </StylesProvider>
    )
}

    return (
        <div>
            <Header onSignOut ={onSignOut} isSignedIn={isSignedIn} />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/" render={() => <Login onLoginSuccess={onLoginSuccess} />} />
                </Switch>
            </Suspense>
        </div>
    )
}


export default withRouter(App)