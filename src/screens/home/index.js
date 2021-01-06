import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  Modal,
  CardContent,
  Box,
  SvgIcon,
  InputAdornment,
  TextField,
  Divider,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import "./styles.css";
import AddNewForm from "../AddNewForm/index";
import data from "./data";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    display: "none",
  },
  imageChangeButton: {
    marginTop: 20,
    marginLeft: 130,
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    backgroundColor: "white",
    border: "blue",
    borderColor: "blue",
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
    display: "none",
    paddingRight: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    marginLeft: 0,
    float: "right",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [products] = useState(data);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = products.filter((person) =>
      person.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="container ">
      <Grid
        container
        spacing={2}
        className="d-flex justify-content-center mt-3"
      >
        <Grid item xs={12} sm={8} md={6} lg={8}>
          <Card>
            <CardHeader
              action={
                <div>
                  <Button
                    variant="contained"
                    component="label"
                    className={classes.button}
                    onClick={handleOpen}
                  >
                    + Add New
                  </Button>
                </div>
              }
              title={
                <div>
                  <b>Form Configurator</b>
                </div>
              }
            />
            <Divider />
            <CardContent>
              <Box maxWidth={500}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <Search />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search forms"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </CardContent>

            {searchResults.map((product11) => (
              <Card className="mt-2 mx-3">
                <CardHeader
                  className="container mx-n3"
                  action={
                    <div>
                      <Button
                        variant="contained"
                        component="label"
                        className={classes.button}
                        onClick={handleOpen}
                      >
                        {product11.formType}
                      </Button>
                    </div>
                  }
                  title={
                    <div>
                      <b>{product11.title}</b>
                    </div>
                  }
                  subheader={product11.createdAt}
                />
              </Card>
            ))}
          </Card>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddNewForm />
      </Modal>
    </div>
  );
}

export default withRouter(Home);
