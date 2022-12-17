import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Helpers/tokenHeaders";
const url = "http://localhost:4040/answers";

const initialState = {
  Answers: [],
  isLoading: true,
};
export const getAnswers = createAsyncThunk("aswers", async (data) => {
  let Answers = [];
  const response = await axios
    .get(`${url}/question/${data}`, { headers: authHeader() })
    .then((data) => data.data);
  Answers = [...response];
  return Answers;
});
export const addAnswer = createAsyncThunk(
  "postanswer",
  async (data) => {
    const response = await axios
      .post(url, data, { headers: authHeader() })
      .then((data) => data.json());
    return response;
  },
  getAnswers()
);
export const addVote = createAsyncThunk("votes", async (data) => {
  const response = await axios
    .post(`${url}/answer/vote/${data.answer_id}`, data, { headers: authHeader() })
    .then((data) => data.data);
  return response;
});
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
      state.Answers = payload;
    },
    [getAnswers.rejected]: (state) => {
      state.loading = true;
    },
  },
});
const answerReducer = answerSlice.reducer;
export default answerReducer;
