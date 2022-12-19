import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Helpers/tokenHeaders";
const url = "http://localhost:4040/user";

const initialState = {
  Profile: [],
  isLoading: true,
};
export const getUserProfile = createAsyncThunk("aswers", async () => {
  let Profile = [];
  const response = await axios
    .get(url, { headers: authHeader() })
    .then((data) => data.data);
  Profile = [...response];
  return Profile;
});

export const deleteQuestion = createAsyncThunk("delequestion", async (data) => {
  console.log(data.question_id);
  await axios.delete(`${url}/question/${data.question_id}`).then((data) => data.data);
});
export const deleteAnswer = createAsyncThunk("delequestion", async (data) => {
  await axios.delete(`${url}/answer/${data}`).then((data) => data.data);
});
export const deleteComment= createAsyncThunk("delequestion", async (data) => {
  await axios.delete(`${url}/comment/${data}`).then((data) => data.data);
});
export const updateQuestion= createAsyncThunk("updateQuestion", async (data) => {
  await axios.put(`${url}/questions/question/${data.question_id}`).then((data) => data.data);
});
export const updateAnswer= createAsyncThunk("updateanswer", async (data) => {
  console.log(data.answer_id);
  await axios.patch(`${url}/answers/answer/${data.answer_id}`, data).then((data) => data.data);
});
export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Profile = payload;
    },
    [getUserProfile.rejected]: (state) => {
      state.loading = true;
    },
  },
});
const userReducer = profileSlice.reducer;
export default userReducer;
