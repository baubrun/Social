import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api"


export const getPosts = createAsyncThunk(
    "api.fetchPosts",
    async () => {
        try {
            const response = await api.fetchPosts()
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        error: ""
    }, 
    reducers: {
        createPost: (state, action) => {
                state.posts = action.payload
        },
    },
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.error = action.error
        },
    }
})


export const {createPost} = postSlice.actions
export const postState = (state) => state.posts
export default postSlice.reducer