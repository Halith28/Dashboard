import React from "react";
import { Grid, Card, CardHeader, Divider } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  treestructure: {
    height: 580,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const FormCreation = () => {
  const classes = useStyles();
  return (
    <div className="mx-3 mt-2">
      <Card>
        <CardHeader
          title={
            <div>
              <b>Form Configurator</b>
            </div>
          }
        />
        <Divider />

        <Grid container spacing={2}>
          <Grid item lg={3}>
            <TreeView
              className={classes.treestructure}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              multiSelect
            >
              <TreeItem nodeId="1" label="Pain">
                <TreeItem nodeId="2" label="Head Pain" />
                <TreeItem nodeId="3" label="Body Pain" />
                <TreeItem nodeId="4" label="Neck Pain" />
              </TreeItem>
              <TreeItem nodeId="5" label="Social History">
                <TreeItem nodeId="6" label="Medical Reports">
                  <TreeItem nodeId="7" label="Main">
                    <TreeItem nodeId="8" label="Physical health" />
                    <TreeItem nodeId="9" label="Mental Strength" />
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item lg={9}>
            <h3>Form builder</h3>
            {/* <Card>
              <CardHeader
                title={
                  <div>
                    <b>{label}</b>
                  </div>
                }
              />
            </Card> */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default FormCreation;
