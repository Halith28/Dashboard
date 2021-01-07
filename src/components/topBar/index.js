import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Button} from '@material-ui/core';
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #ebebeb",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  layoutLeftIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderLeftWidth: "6px"
  },
  layoutRightIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderRightWidth: "6px"
  },
  sizeRiplle:{
      padding: "4px",
      borderRadius: 2
  },
  active: {
      backgroundColor: "#3f51b542"
  }
}));

const TopBar = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"inherit"} elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
          <div className={classes.grow} />
          <div>
            {props.buttonName && 
              <Button color="primary" onClick={()=> props.onClickButton()}>{props.buttonName}</Button>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
    title: PropTypes.string,
    buttonName: PropTypes.string,
    onClickButton: PropTypes.func,
}

TopBar.defaultProps = {
    buttonName: null,
    onClickButton: () => {},
}
export default TopBar;