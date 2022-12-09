import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Helpers/tokenHeaders";
const url = "http://localhost:4040/comments";

const initialState = {
  Comments: [],
  isLoading: true,
};
export const getComments = createAsyncThunk("comments", async (data) => {
  let Comments = [];
  const response = await axios
    .post(`${url}/${data}`, data)
    .then((data) => data.data);
  Comments = [...response];
  console.log(Comments)
  return Comments;
});

export const addComment = createAsyncThunk(
  "postanswer",
  async (data) => {
    console.log(data);
    const response = await axios
      .post(url, data, { headers: authHeader() })
      .then((data) => data.json());
    return response;
  },
  getComments()
);


export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state) => {
      state.loading = true;
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.Comments = payload;
    },
    [getComments.rejected]: (state) => {
      state.loading = true;
    },
  },
});
const commentReducer = commentSlice.reducer;
export default commentReducer;
