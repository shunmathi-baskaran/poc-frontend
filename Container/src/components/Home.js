import React, { useEffect, lazy } from "react";

const CustomerAccInfoAppLazy = lazy(() =>
import("customerAccInfo/CustomerAccInfoApp")
);
const TransactionAppLazy = lazy(() => import("./TransactionApp"));

const Home = ({ manageGlobalStore, customerInfo, accountNumber}) => {
    return (
        <div style={{ display: "flex" }}>
          <div className="customeraccinfo-container container">
            <CustomerAccInfoAppLazy
              manageGlobalStore={manageGlobalStore}
              customerInfo={customerInfo}
            />
          </div>
          <div className="transactionapp-container container">
            {accountNumber !== null ? (
              <TransactionAppLazy accountNumber={accountNumber} />
            ) : ( 
              <div style={{ margin: "1em" }}>
                Please click on View Transactions on any account on{" "}
                <b>Account Information</b> tab to view transaction details
              </div>
            )}
          </div>
        </div>
    );
  };

  export default Home;