import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core";
import "./styles.css";

export default function AddNewForm() {
  return (
    <Card className="modal-size">
      <CardHeader
        action={
          <div>
            <Button
              variant="contained"
              component="label"
              // className={classes.button}
              // onClick={handleOpen}
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
      <Card className="mx-3 mt-3">
        <CardHeader
          title={
            <div>
              <b>Add New Form</b>
            </div>
          }
        />
        <div className="mx-3 mb-2">
          <span>Form Name</span>
          <br />
          <TextField type="text" variant="outlined" fullWidth size="small" />
          <span>Form Type</span>
          <br />
          {/* <input type="button" value="Assessment"></input> */}
          <Button variant="contained">Assessment</Button>{" "}
          <Button variant="contained">Report</Button>
        </div>
      </Card>
      <CardActions style={{ float: "right" }}>
        <Button variant="contained" type="submit">
          Add Form
        </Button>
      </CardActions>
    </Card>
  );
}
