import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserProfile from './UserProfile'
import AccountCard from './AccountCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Accordian(props) {
  const classes = useStyles();
  const { customerInfo, transactionDetails } = props;
  const [accounts, setAccounts] = useState([]);

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
    //fetch customer data and transactions data
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => setAccounts(res.data.getAccounts));
  }, []);

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Account Information</Typography>
        </AccordionSummary>
           <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
            {accounts.length > 0 ?
            accounts.map(account => (
              <AccountCard key={account.accountNumber} account={account} transactionDetails={transactionDetails} />
            )): <p>Loading...</p>   
            }      
           </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>User Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UserProfile customerInfo={customerInfo}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}