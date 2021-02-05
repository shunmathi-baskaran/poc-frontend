import React, { useState } from 'react';
import TransactionApp from './components/TransactionApp'
import CustomerAccInfoApp from './components/CustomerAccInfoApp'
import LoginApp from './components/LoginApp'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


export default function App () {
    const [accountNumber, setAccountNumber] = useState(null);
    const transactionDetails = (accountNumber) => {
        setAccountNumber(accountNumber);
    };
    const [customerInfo, setCustomerInfo] = useState({});
    const onLogin = (customerDetails) => {
        setCustomerInfo(customerDetails);
    }
    
const Home = () => {
    return (
        <React.Fragment>
            <CustomerAccInfoApp transactionDetails ={transactionDetails}  customerId= {1000001}
                customerInfo =  {{
                    customerId: 1000001,
                    username: 'CustomerTwo',
                    password: 'xyz',
                    email: 'CustomerTwo@gmail.com',
                    phoneNumber: '9787644674'
                }} />
            {accountNumber !== null 
            ? <TransactionApp accountNumber={accountNumber}/> 
            : <div>Please click on any account to view transaction details</div>
            }
        </React.Fragment>
    )
}

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/" render={() => <LoginApp onLogin={onLogin} />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
