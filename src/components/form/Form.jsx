import React, { useState } from "react";

import {useDispatch} from "react-redux"

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

import FileBase64 from "react-file-base64";

import {createPost} from "../../redux/postSlice"



const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    author: "",
    file: "",
    message: "",
    tags: "",
    title: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(createPost(postData))
    handleReset()
  };
  const handleReset = () => {
    setPostData({
      author: "",
      file: "",
      message: "",
      tags: "",
      title: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.form} ${classes.root}`}
        autoComplete="off"
        onSubmit={(evt) => handleSubmit(evt)}
        noValidate
      >
        <Typography variant="h6">Events</Typography>
        <TextField
          name="author"
          fullWidth
          label="Author"
          onChange={(evt) =>
            setPostData({ ...postData, author: evt.target.value })
          }
          variant="outlined"
          value={postData.author}
        />
        <TextField
          name="title"
          fullWidth
          label="Title"
          onChange={(evt) =>
            setPostData({ ...postData, title: evt.target.value })
          }
          variant="outlined"
          value={postData.title}
        />
        <TextField
          name="message"
          fullWidth
          label="Message"
          onChange={(evt) =>
            setPostData({ ...postData, message: evt.target.value })
          }
          variant="outlined"
          value={postData.message}
        />
        <TextField
          name="tags"
          fullWidth
          label="Tags"
          onChange={(evt) =>
            setPostData({ ...postData, tags: evt.target.value })
          }
          variant="outlined"
          value={postData.tags}
        />
        <Box className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, file: base64 })}
          />
        </Box>
        <Button 
        className={`${classes.btn} ${classes.heading}`} 
        color="primary" 
        fullWidth 
        size="large" 
        type="submit"
        variant="contained">
          Submit
        </Button>
        <Button
          color="secondary"
          fullWidth
          onClick={() => handleReset()}
          size="small"
          variant="contained"
        >
          Reset
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
