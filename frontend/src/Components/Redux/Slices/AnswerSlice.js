import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from '../Helpers/tokenHeaders'
const url = "http://localhost:4040/answers";

const initialState = {
  Answers: [],
  isLoading:true
};
export const getAnswers = createAsyncThunk("aswers", async (data) => {
  let Answers = [];
  const response = await axios.post(`${url}/${data}`, data).then((data) => data.data);
  Answers = [...response];
  console.log(Answers);
  return Answers;
});


export const addAnswer = createAsyncThunk(
  "postanswer",
  async (data) => {
    console.log(data);
    const response = await axios.post(url, data, {headers:authHeader()}).then((data) => data.json());
    return response;
  },
  getAnswers()
);
export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnswers.pending]: (state) => {
      state.loading = true;
    },
    [getAnswers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.Answers = payload;
    },
    [getAnswers.rejected]: (state) => {
      state.loading = true;
    },
  },
});
const answerReducer = answerSlice.reducer;
export default answerReducer;
