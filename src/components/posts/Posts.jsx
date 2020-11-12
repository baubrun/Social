import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post";
import Typography from "@material-ui/core/Typography";

import { postState } from "../../redux/postSlice";

const Posts = () => {
  const { posts } = useSelector(postState);
  console.log("posts :>> ", posts);

  return (
    <>
      <Typography variant="h1">Posts</Typography>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
