import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import * as api from "../api";


export const getPosts = createAsyncThunk(
    "api.fetchPosts",
    async () => {
        try {
            const {
                data
            } = await api.fetchPosts();
            return data;
        } catch (error) {
            return error.message;
        }
    });


export const createPost = createAsyncThunk(
    "api.createPost",
    async (post) => {
        try {
            const {
                data
            } = await api.createPost(post);
            return data;
        } catch (error) {
            return error.message;
        }
    });

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        error: "",
    },
    reducers: {},
    extraReducers: {
        [createPost.fulfilled]: (state, action) => {
            state.posts = [...state.posts , action.payload];
        },
        [createPost.rejected]: (state, action) => {
            state.error = action.error;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.error = action.error;
        },
    },
});




export const postState = (state) => state.posts;
export default postSlice.reducer;