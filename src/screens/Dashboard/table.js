import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
  },
  topbarButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 450,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const MainTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="defualt" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Timesheet
          </Typography>
          <Button
            color="primary"
            variant="contained"
            className={classes.topbarButton}
          >
            View Full Sheet
          </Button>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreHorizIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} elevation={0}>
        <Table
          className="table-striped table-bordered"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainTable;
