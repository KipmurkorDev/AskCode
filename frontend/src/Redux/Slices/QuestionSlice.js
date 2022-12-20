import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from '../Helpers/tokenHeaders'
const url = "http://localhost:4040/questions";

const initialState = {
  Questions: [],
  Searches:[],
  MostAnswer:[]
};
export const getQuestions = createAsyncThunk("questions", async (data) => {
  let Questions = [];
  const response = await axios.get(`${url}/${data}`, { headers: authHeader() }).then((data) => data.data);
  Questions = [...response];
  return Questions;
});
export const addQuestion = createAsyncThunk(
  "postquestion",
  async (data) => {
    const response = await axios.post(url, data, {headers:authHeader()}).then((data) => data.data)
    return response;
  },
  getQuestions()
);
export const searchQuestions = createAsyncThunk(
  "searchquestions",
  async (data) => {
    let Searches = [];
    const response = await axios.post(`${url}/search/${data}`, data, { headers: authHeader() }).then((data) =>data.data);
    Searches = [...response];
    return Searches;  
  },
);
export const getmostAsnswers = createAsyncThunk(
  "mostasnswered",
  async () => {
    let MostAnswer = [];
    const response = await axios.get(`${url}/most/answers`, { headers: authHeader() }).then((data) =>data.data);
    MostAnswer = [...response];
    console.log(MostAnswer);
    return MostAnswer;  
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
    [getmostAsnswers.pending]: (state) => {
      state.loading = true;
    },
    [getmostAsnswers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.MostAnswer = payload;
    },
    [getmostAsnswers.rejected]: (state) => {
      state.loading = false;
    },
    [searchQuestions.pending]: (state) => {
      state.loading = true;
    },
    [searchQuestions.fulfilled]: (state, { payload }) => {
      state.Searches = payload;
    },
    [searchQuestions.rejected]: (state) => {
      state.loading = false;
    },
  },
});
const questionReducer = questionSlice.reducer;
export default questionReducer;
