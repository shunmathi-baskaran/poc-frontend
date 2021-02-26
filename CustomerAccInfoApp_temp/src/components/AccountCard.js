import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  table: {
    minWidth:100,
  },
  tableHeader:{
      backgroundColor:"#97144d"
  },
  headerText:{
    color: "white"
  },
  tableCell:{
    fontSize: "0.9em",
    fontWeight: "bold"
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  vtBtn:{
    backgroundColor: "#97144d"
  }
}));

export default function AccountCard({account, handleSelectedAccount}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
       title={`Account No. ${account.accountNumber}`}
       style={{backgroundColor:"#ecf0f1", color:"#97144d"}}
        />
        <Divider />
      <CardContent>
        <Table className={classes.table} aria-label="account table">
            <TableBody>
            {Object.keys(account).map((key) => {
                if(key !=="accountNumber")
                return(
                <TableRow key={key}>
                    <TableCell className={classes.tableCell} align="center">{key}</TableCell>
                    <TableCell align="center" className={classes.tableCell}>{account[key]}</TableCell>
                </TableRow>)
            })}
            </TableBody>
        </Table>
      </CardContent>
      <CardActions>
      <Button className={classes.vtBtn} fullWidth variant="contained" color="secondary" onClick={() => handleSelectedAccount(account.accountNumber)}>View Transactions</Button>
      </CardActions>
    </Card>
  );
}