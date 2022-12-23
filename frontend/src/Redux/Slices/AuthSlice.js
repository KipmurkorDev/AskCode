import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/auth";

const initialState = {
users:"",
token:{},
error:"",
loading: true,
};
export const loginUser = createAsyncThunk("users", async (data, {rejectWithValue}) => {
  try {
    const userinfo=await axios.post(`${url}/login`, data).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
    return userinfo
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const registeUser = createAsyncThunk("register", async (data, rejectWithValue) => {

try {
  const response = await axios
  .post(`${url}/signup`, data)
  .then((data) => data.data);
return response;
} catch (error) {
  if (error.response && error.response.data.message) {
    return rejectWithValue(error.response.data.message);
  } else {
    return rejectWithValue(error.message);
  }
}







})
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.token = payload;
    },
    [loginUser.rejected]: (state, {payload}) => {
      state.error=payload
      state.loading = false;
    },
    [registeUser.pending]: (state) => {
      state.loading = true;
    },
    [registeUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.users = payload;
    },
    [registeUser.rejected]: (state, {payload}) => {
      state.error=payload
      state.loading = false;
    },
  },
});

const authReducer = userSlice.reducer;

export default authReducer;