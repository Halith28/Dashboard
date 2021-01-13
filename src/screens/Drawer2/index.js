import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardLayout from "../DashboardLayout";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, TextField, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "../Dashboard/todolist";
import Table from "../Dashboard/table";
import Report from "../Dashboard/report";
import Screenshots from "../Dashboard/screenshots";
import moment from "moment";
import Loading from "../../components/Loading";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: 55,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  addFloatingButton: {
    position: "absolute",
    left: "-10px",
    top: "45px",
  },
  grow: {
    flexGrow: 1,
  },
}));

const todayDate = moment();
const data = [
  {
    form_name: "Revamp Instagram App",
    status: "Today",
    created_at: todayDate,
  },
  {
    form_name: "ProtoTyping",
    status: "Upcoming",
    created_at: todayDate.clone().add(1, "days"),
  },
  {
    form_name: "Collect Reference for new project",
    status: "Upcoming",
    created_at: todayDate.clone().add(2, "days"),
  },
];

const componentList = [
  { title: "Design Task", id: 1 },
  { title: "Deployment Task", id: 2 },
];
const defaultProps = {
  options: componentList,
  getOptionLabel: (option) => option.title,
};

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return !spinner ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="border border-light">
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Grid item style={{ width: 200, marginLeft: 10 }}>
            <Autocomplete
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder={"Select Project"}
                  fullWidth
                  margin={"dense"}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <div className={classes.grow} />
          <div>
            <Button color="primary">+Add Project</Button>
          </div>
        </Toolbar>
        {open && (
          <Fab
            style={{ backgroundColor: "#ecbf41" }}
            aria-label="add"
            size="small"
            className={classes.addFloatingButton}
            onClick={handleDrawerClose}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
          </Fab>
        )}
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DashboardLayout />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container>
          <Grid item lg={8} md={12}>
            <Grid container>
              <Grid
                item
                lg={12}
                md={6}
                xs={12}
                style={{
                  height: "290px",
                  overflowY: "auto",
                }}
                className="border border-light"
              >
                <Table />
              </Grid>
              <Divider />
              <Grid
                item
                lg={12}
                md={6}
                xs={12}
                style={{ height: "300px" }}
                className="border border-light"
              >
                <AppBar position="static" color="defualt" elevation={0}>
                  <Toolbar variant="dense">
                    <Typography variant="h6">To-Do lists</Typography>
                  </Toolbar>
                </AppBar>
                {data.map((list, index) => {
                  return <Todolist key={index} {...list} />;
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container>
              <Grid
                item
                lg={12}
                md={6}
                xs={10}
                style={{ height: "290px" }}
                className="border border-light"
              >
                <Report />
              </Grid>
              <Grid
                item
                lg={12}
                md={6}
                xs={10}
                style={{ height: "300px" }}
                className="border border-light"
              >
                <Screenshots />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
}
