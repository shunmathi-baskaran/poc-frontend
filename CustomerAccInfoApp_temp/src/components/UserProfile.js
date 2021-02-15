import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth:100,
  },
  tableHeader:{
      backgroundColor:"black"
  },
  headerText:{
    color: "white"
  }
});

export default function UserProfile(props) {
  const classes = useStyles();
  console.log(classes)
  const { customerInfo } = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
           <TableCell colSpan={2} align="center" className={classes.headerText}>User Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(customerInfo).map((key) => {
            if(key!=="password")
            return(
            <TableRow key={key}>
              <TableCell align="center">{key}</TableCell>
              <TableCell align="center">{customerInfo[key]}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
