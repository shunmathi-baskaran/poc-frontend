import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  table: {
    minWidth:100,
  },
  tableHeader:{
      backgroundColor:"black"
  },
  headerText:{
    color: "white"
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

export default function AccountCard({account, transactionDetails}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
       title={account.accountNumber}
        />
        <Divider />
      <CardContent>
        <Table className={classes.table} aria-label="account table">
            <TableBody>
            {Object.keys(account).map((key) => {
                if(key !=="accountNumber")
                return(
                <TableRow key={key}>
                    <TableCell align="center">{key}</TableCell>
                    <TableCell align="center">{account[key]}</TableCell>
                </TableRow>)
            })}
                <TableRow key="viewTransmission">
                    <TableCell align="center">Transmission Details</TableCell>
                    <TableCell align="center" className={classes.link} onClick={() => transactionDetails(account.accountNumber)}>View Transactions</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}