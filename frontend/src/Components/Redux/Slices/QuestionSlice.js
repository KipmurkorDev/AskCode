import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from '../Helpers/tokenHeaders'
const url = "http://localhost:4040/questions";

const initialState = {
  Questions: [],
};
export const getQuestions = createAsyncThunk("questions", async () => {
  let Questions = [];
  const response = await axios.get(url).then((data) => data.data);
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
export const searchQuestions = createAsyncThunk(
  "searchquestions",
  async (data) => {
    console.log(data);
    let Questions = [];
    const response = await axios.post(`${url}/search`, data).then((data) => data.json());
    Questions = [...response];
    console.log(Questions);
    return Questions;  
  },
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
    [searchQuestions.pending]: (state) => {
      state.loading = true;
    },
    [searchQuestions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.Questions = payload;
    },
    [searchQuestions.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const questionReducer = questionSlice.reducer;
export default questionReducer;
