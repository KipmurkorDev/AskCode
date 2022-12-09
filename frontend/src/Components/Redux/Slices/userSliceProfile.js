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
// let user_id=authHeader()
  const response = await axios.post(url,{headers:authHeader()}).then((data) => data.data);
  Profile = [...response];
  console.log(Profile);
  return Profile;
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
      console.log(payload);
      state.Profile = payload;
    },
    [getUserProfile.rejected]: (state) => {
      state.loading = true;
    },
  },
});
const profileReducer = profileSlice.reducer;
export default profileReducer;
