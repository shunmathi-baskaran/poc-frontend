import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  header: {
    backgroundColor: "#ecf0f1",
    color: "#97144d",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  row: {
    // '&:nth-of-type(odd)': {
    //   backgroundColor: 'white',
    // },
    // '&:nth-of-type(even)': {
    //   backgroundColor: '#ccc',
    // },
  },
}));

export default ({ transactions }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "id", label: "ID", minWidth: '20%' },
    { id: "date", label: "Date", minWidth: '15%' },
    {
      id: "narration",
      label: "Narration",
      minWidth: '15%',
    },
    {
      id: "type",
      label: "Type",
      minWidth: '20%',
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: '20%',
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(id, date, narration, type, amount) {
    return { id, date, narration, type, amount };
  }

  const rows = transactions.map((transaction) => {
    return createData(
      transaction._id,
      transaction.date,
      transaction.narration,
      transaction.type,
      transaction.amount
    );
  });

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.header}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="button"
                    tabIndex={-1}
                    key={row.id}
                    className={classes.row}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ fontWeight: "bold" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
