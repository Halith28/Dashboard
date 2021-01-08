import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';


const componentList = [
    { title: 'Tab Select', id: 1 },
    { title: 'Tab Multi-Select', id: 2 },
]
const defaultProps = {
    options: componentList,
    getOptionLabel: (option) => option.title,
};

const useStyles = makeStyles((theme) => ({
  formComponentArea: {
    padding: theme.spacing(2),
  },
  inputFiled: {
      marginBottom: "16px"
  },
  selectComponentList:{
      marginTop: 0
  }
}));

export default function Form(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: "10px 20px" }}
      >
        <Grid>
          <Typography variant={"h6"} style={{fontSize: "17px"}} component={"p"}>
            {"Head Pain"}
          </Typography>
        </Grid>
        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                //  onChange={handleChange}
                name="checkedA"
              />
            }
            label="Skip"
          />
        </Grid>
      </Grid>
      <Divider />

      <Grid style={{ padding: "20px", backgroundColor: "#F5F5F5" }}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{marginBottom: "16px"}}
      >
        <Grid>
          <Typography variant={"subtitle1"} component={"p"}>
            {"Smart Skip"}
          </Typography>
        </Grid>
        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                //  onChange={handleChange}
                name="checkedA"
              />
            }
            label="Required"
          />
        </Grid>
      </Grid>
        <Grid>
        <TextField
            fullWidth
            label="Question / title"
            id="outlined-size-small"
            variant="outlined"
            size="small"
        />
        </Grid>
      </Grid>
      <Divider />

      <Grid style={{ padding: "20px", marginTop: "16px" }}>
          <Paper style={{ padding: "8px 20px 3px 20px", border: "1px solid #E0E0E0"}} elevation={0} >
            <Grid container direction="row" justify="space-between" alignItems="center" style={{marginBottom: "20px"}}>
                <Grid item style={{ width: 300 }}>
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => <TextField {...params} className={classes.selectComponentList} size="small" placeholder={"Select Filed Type"} fullWidth margin={"dense"} />}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={true}
                            //  onChange={handleChange}
                            name="checkedA"
                        />
                        }
                        label="Required"
                    />
                    <Button color="primary">{"delete"} </Button>
                </Grid>
            </Grid>
            <Grid item className={classes.inputFiled}>  
              <TextField
                fullWidth
                label="Question / title"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                />
            </Grid>
            <Grid item className={classes.inputFiled}>  
                <TextField
                    fullWidth
                    label="Options"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                />
            </Grid>
          </Paper>
      </Grid>


    </Paper>
  );
}
