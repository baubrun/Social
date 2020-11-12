import React from 'react'
import Post from "./Post";
import Typography from "@material-ui/core/Typography";



const Posts = () => {
    return (
        <>
         <Typography variant="h1">Posts</Typography>   
         <Post />
         <Post />
        </>
    )
}

export default Posts
