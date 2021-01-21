import { CardHeader, Grid, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
   
      // margin: theme.spacing(1),
      width: "100%",
      height: "100%",
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      cursor: "pointer",
    menuButton: {
      marginRight: theme.spacing(2),
    },
    "& .MuiTypography-h6":{
      fontSize: "1.00rem"
    }
  },
  listGrid: {
    paddingTop: "15px",
    // paddingBottom: "10px",
    "& .MuiTypography-h5": {
      fontSize: "1.2118rem",
      fontWeight: 500,
    },
    "& .MuiCardHeader-subheader": {
      fontSize: ".9rem",
      fontWeight: 500,
    },
    "& .MuiTypography-colorTextSecondary":{
      color: "black",
    }
  }
}));

const Todolist = (props) => {
  const classes = useStyles();

  return (
    <div className="mt-0">
      <Grid container className={classes.listGrid}>
        <Grid item lg={1} className="ml-2">
          <CardHeader
            title={moment(props.created_at).format("D")}
            subheader={moment(props.created_at).format("MMM")}
          />
        </Grid>
        <Grid item lg={10} sm={10}>
          <Paper className={classes.root}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item p={2}>
                <Typography variant={"h6"} component={"p"}>
                  {props.form_name}
                </Typography>
                <Typography variant={"body1"} color={"textSecondary"}>
                  {props.status}
                </Typography>
              </Grid>
              <Grid item >
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Todolist;
