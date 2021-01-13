import { Divider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

const Screenshots = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="defualt" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Screenshots
          </Typography>
        </Toolbar>
      </AppBar>
      {[1, 2, 3].map((val, index) => {
        return (
          <div key={index} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" variant="square">
                  <ImageIcon />
                </Avatar>
              }
              action={<Button>View</Button>}
              title="Shot_1_attach_1.png"
            />
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Screenshots;
