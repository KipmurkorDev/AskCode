import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/auth";

const initialState = {
users:""
};
export const loginUser = createAsyncThunk("users", async (data) => {
  await axios.post(`${url}/login`, data).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
});

export const registeUser = createAsyncThunk("register", async (data) => {
  const response = await axios
    .post(`${url}/signup`, data)
    .then((data) => data.json());
  return response;
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload;
    },
    [loginUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const authReducer = userSlice.reducer;

export default authReducer;