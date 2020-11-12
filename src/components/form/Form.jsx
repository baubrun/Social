import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <Typography variant="h1">Form</Typography>
      
    </div>
  );
};

export default Form;
