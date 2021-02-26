import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  table: {
    minWidth:100,
  },
  tableHeader:{
    backgroundColor:"#ecf0f1"
  },
  headerText:{
    color: "#97144d",
    fontWeight: "bold",
    fontSize: "1.1em"
  },
  editBtn: {
    backgroundColor: "#97144d"
  },
  tableCell:{
    fontSize: "0.9em",
    fontWeight: "bold"
  },
});

export default function UserProfile(props) {
  const classes = useStyles();
  const { customerInfo, manageGlobalStore } = props;
  const [isEditPhoneNumber, setIsEditPhoneNumber] = useState(false);
  const [newPhoneNumber, setPhoneNumber] = useState(props.customerInfo.phoneNumber)
  const savePhoneNumber = () => {
    //fetch call with new phone number.
    const query = `mutation{
      updatePhoneno(customerId: ${customerInfo.customerId}, phoneNumber: "${newPhoneNumber}") {
        phoneNumber
      }
    }`;
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => manageGlobalStore(res.data.updatePhoneno.phoneNumber, "LOGIN_APP", "UPDATE_PHONE_NO"))
      setIsEditPhoneNumber(false);
}
    
  return (
    <TableContainer component={Paper} color="primary">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
           <TableCell colSpan={2} align="center" className={classes.headerText}>User Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(customerInfo).map((key) => {
            if(key!=="password" && key !== "phoneNumber")
            return(
            <TableRow key={key}>
              <TableCell className={classes.tableCell} align="center">{key}</TableCell>
              <TableCell className={classes.tableCell} align="center">{customerInfo[key]}</TableCell>
            </TableRow>)
            else if(key==="phoneNumber"){
              return(
                <TableRow key={key}>
                  <TableCell className={classes.tableCell} align="center">{key}</TableCell>
                  {
                    isEditPhoneNumber ? 
                    ( <TableCell>
                        <TextField value={newPhoneNumber} onChange={(evt) => setPhoneNumber(evt.target.value)}/>
                        <Button className={classes.editBtn} variant="contained" color="secondary" size="small" onClick={savePhoneNumber}>Save</Button>
                      </TableCell>
                    )
                    : 
                    (
                      <TableCell className={classes.tableCell} align="center">{customerInfo[key]} &nbsp;
                      <Button className={classes.editBtn} variant="contained" color="secondary" size="small" onClick={() => setIsEditPhoneNumber(true)}>Edit</Button>
                    </TableCell>
                    ) 
                  }
                </TableRow>)
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
