import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Helpers/tokenHeaders";
const url = "http://localhost:4040/profile";

const initialState = {
  Profile: [],
  isLoading: true,
};
export const getUserProfile = createAsyncThunk("aswers", async () => {
  let Profile = [];
  const response = await axios
    .post(`${url}/${authHeader().user_id}`)
    .then((data) => data.data);
  Profile = [...response];
  return Profile;
});

export const deleteQuestion = createAsyncThunk("delequestion", async (data) => {
  console.log(data.question_id);
  await axios.delete(`${url}/${data.question_id}`).then((data) => data.data);
});
export const deleteAnswer = createAsyncThunk("delequestion", async (data) => {
  await axios.delete(`${url}/answers/${data}`).then((data) => data.data);
});
export const deleteComment= createAsyncThunk("delequestion", async (data) => {
  console.log(data);
  await axios.delete(`${url}/comments/${data}`).then((data) => data.data);
});

export const profileSlice = createSlice({
  name: "profile",
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
const profileReducer = profileSlice.reducer;
export default profileReducer;
