import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/users";

const initialState = {
users:""
};
export const getUser = createAsyncThunk("users", async (data) => {
  await axios.post(`${url}/login`, data).then((response) => {
    console.log(response);
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
});

export const addusers = createAsyncThunk("register", async (data) => {
  const response = await axios
    .post(`${url}/signup`, data)
    .then((data) => data.json());
  return response;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload;
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;