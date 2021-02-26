import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UserProfile from "./UserProfile";
import AccountCard from "./AccountCard";
import { setAccounts, setSelectedAccount } from "../store/actions/accountsinfo";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "white",
  },
  accordianSummary:{
    backgroundColor: "#97144d",
    borderBottom: "2px solid white"
  }
}));

function Accordian(props) {
  const classes = useStyles();
  const { customerInfo, dispatch, accountInfoAppStore, manageGlobalStore } = props;
  // const [accounts, setAccounts] = useState([]);

  const query = `query {
    getAccounts(customerId: ${customerInfo.customerId}) {
      customerId
      accountNumber
      accountType
      ifscCode
      branchName
      balance
    }
  }`;

  useEffect(() => {
    console.log("cdm of customeraccapp executed")
    //fetch customer data and transactions data
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => {
        //setAccounts(res.data.getAccounts)
        dispatch(setAccounts(res.data.getAccounts));
      });
  }, []);

  // useEffect(() =>{
  //   console.log("cdm of customeraccapp executed")
  // }, [])

  useEffect(() =>{
    console.log("useEffect customeraccapp called")
    manageGlobalStore(accountInfoAppStore, "ACCOUNTINFO_APP")
  }, [accountInfoAppStore])

  const handleSelectedAccount = (accountNumber) =>{
    console.log("dispatched acc no.", accountNumber)
    dispatch(setSelectedAccount(accountNumber))
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.accordianSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Account Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          {accountInfoAppStore.accounts.length > 0 ? (
            accountInfoAppStore.accounts.map((account) => (
              <AccountCard
                key={account.accountNumber}
                account={account}
                handleSelectedAccount={handleSelectedAccount}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordianSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>User Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UserProfile customerInfo={customerInfo} manageGlobalStore={manageGlobalStore} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function mapStateToProps(state) {
  debugger
  return { accountInfoAppStore: state };
}

export default connect(mapStateToProps)(Accordian);
