import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from '../Helpers/tokenHeaders'
const url = "http://localhost:4040/questions";

const initialState = {
  Questions: [],
};
export const getQuestions = createAsyncThunk("questions", async () => {
  let Questions = [];
  const response = await axios.get(url, {headers:authHeader()}).then((data) => data.data);
  Questions = [...response];
  return Questions;
});
export const addQuestion = createAsyncThunk(
  "postquestion",
  async (data) => {
    const response = await axios.post(url, data, {headers:authHeader()}).then((data) => data.json());
    return response;
  },
  getQuestions()
);
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.loading = true;
    },
    [getQuestions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Questions = payload;
    },
    [getQuestions.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const questionReducer = questionSlice.reducer;
export default questionReducer;
