import { Button, Grid, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import clsx from "clsx";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Report from "../Dashboard/report";
import Screenshots from "../Dashboard/screenshots";
import Table from "../Dashboard/table";
import Todolist from "../Dashboard/todolist";
import DashboardLayout from "../DashboardLayout";

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
    zIndex: 2000,
    boxShadow:
  "0 6px 50px -27px rgba(0, 0, 0, 0.26)"

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
    display: "block",
    alignItems: "center",
    padding: theme.spacing(0, 1),
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
    backgroundColor: "#BD9A36",
    width:24,
    height:24,
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
  },
  fab:{
    zIndex:3000,
    position:'fixed',
    left:220,
    backgroundColor:'white',
    top:43,
    padding:'8px 0px 8px 8px',        
    borderRadius: "100% 0% 0% 100% / 46% 34% 66% 54% ",
  },
  grow: {
    flexGrow: 1,
  },
  todoTopBar : {
    paddingTop: "20px",
  },
  topbarButton: {
    fontSize: "14px",
    marginRight: theme.spacing(2),
    backgroundColor: "#e9e8f4",
    color: "#382f9c",
    "&:active": {
      backgroundColor: "#382f9c",
      color: "white"
    },
    "&:focus": {
      backgroundColor: "#382f9c",
      color: "white"
    }
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
  const [open, setOpen] = React.useState(true);
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
        elevation={0}
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
            <Button className={classes.topbarButton}><b>+Add Project</b></Button>
          </div>
        </Toolbar>
        
      </AppBar>
      {open && (
          <div className={classes.fab}>
            <div
              className={classes.addFloatingButton}
              onClick={handleDrawerClose}
            >
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
            </div>
          </div>
        )}
      
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
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Grid container>
              <Grid
                item
                lg={12}
                md={6}
                sm={12}
                xs={12}
                style={{
                  height: "350px",
                  overflowY: "auto",
                  overflowX: "auto",
                  // padding: "10px"
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
                style={{ height: "auto" }}
                className="border border-light mb-1"
              >
                <AppBar position="static" color="inherit" elevation={0} className={classes.todoTopBar}>
                  <Toolbar variant="dense">
                    <Typography variant="h6" style={{fontWeight:"1000"}}>To-Do lists</Typography>
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
                sm={12}
                xs={12}
                style={{ height: "350px", padding: "20px" }}
                className="border border-light"
              >
                <Report />
              </Grid>
              <Grid
                item
                lg={12}
                md={6}
                sm={12}
                xs={12}
                style={{ height: "360px" ,padding: "20px"}}
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
