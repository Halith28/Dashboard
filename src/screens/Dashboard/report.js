import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { Paper } from "@material-ui/core";
import ReportIcon1 from "../../components/line-chart.svg";
import ReportIcon2 from "../../components/timer.svg";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 450,
  },
}));

const Report = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="defualt" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Report
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        style={{
          borderRadius: "20px",
          backgroundColor: "#382f9c",
          margin: "5px 15px 5px 15px",
          color: "white",
        }}
      >
        <CardHeader
          avatar={<img src={ReportIcon1} alt="React Logo" />}
          action={
            <Button style={{ backgroundColor: "#39c084", color: "white" }}>
              <KeyboardArrowUpIcon />
              17%
            </Button>
          }
          title={
            <div>
              {"Weekly Activity"}
              <h4>52%</h4>
            </div>
          }
        />
      </Paper>
      <Paper
        style={{
          borderRadius: "20px",
          backgroundColor: "#f4f4f4 ",
          margin: "5px 15px 5px 15px",
        }}
      >
        <CardHeader
          avatar={<img src={ReportIcon2} alt="React Logo" />}
          action={
            <Button style={{ backgroundColor: "#eecfcf", color: "red" }}>
              <KeyboardArrowDownIcon />
              17%
            </Button>
          }
          title={
            <div>
              {"Worked this week"}
              <h4>11:56:33</h4>
            </div>
          }
        />
      </Paper>
      <Paper style={{ margin: "0px 15px" }}>
        <Button variant="outlined" color="primary" fullWidth>
          Export as PDF
        </Button>
      </Paper>
    </div>
  );
};

export default Report;
