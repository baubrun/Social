import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

import Post from "./Post";
import Spinner from "../Spinner";

import { postState } from "../../redux/postSlice";

const Posts = () => {
  const classes = useStyles();

  const { posts } = useSelector(postState);
  console.log("posts :>> ", posts);

  return (
    <>
      {!posts.length ? (
        <Grid
          alignContent="center"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Spinner />
          </Grid>
        </Grid>
      ) : (
        <Grid
          alignItems="stretch"
          className={classes.container}
          container
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item sm={6} xs={12}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
