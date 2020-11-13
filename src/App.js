import React, {useEffect, useState,} from "react";
import {useDispatch} from "react-redux"

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./mui-config";

import {
    getPosts,
} from "./redux/postSlice"

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./AppStyles"
import eventsIcon from "./images/images-events.png";

import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


  return (
    <ThemeProvider theme={theme}>

    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography color="primary" variant="h2" align="center">
          Events
        </Typography>
        <img className={classes.img} src={eventsIcon} alt="events" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid item sm={7} xs={12}>
              <Posts />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Grid></Grid>
    </Container>
    </ThemeProvider>
  );
};

export default App;
