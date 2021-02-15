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
    minWidth: 650,
  },
  tableHeader:{
      backgroundColor:"black",
      color: 'white'
  },
  headerText:{
    color: "white"
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
});

export default function AccountInfo(props) {
  const classes = useStyles();
  const { accounts, transactionDetails } = props;
  const rows = accounts.getAccounts;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
           {Object.keys(rows[0]).map(field => <TableCell className={classes.headerText} key={field}>{field}</TableCell>)}
           <TableCell className={classes.headerText}>Transactions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.accountNumber}>
              <TableCell component="th" scope="row">
                {row.customerId}
              </TableCell>
              <TableCell align="left">{row.accountNumber}</TableCell>
              <TableCell align="left">{row.accountType}</TableCell>
              <TableCell align="left">{row.ifscCode}</TableCell>
              <TableCell align="left">{row.branchName}</TableCell>
              <TableCell align="left">{row.balance}</TableCell>
               <TableCell align="left" className={classes.link} onClick={() => transactionDetails(row.accountNumber)}>View Transactions</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
