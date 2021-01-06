import React from "react";
import { Card, CardHeader } from "@material-ui/core";

const FormBuilder = (label) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={
            <div>
              <b>{label}</b>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default FormBuilder;
