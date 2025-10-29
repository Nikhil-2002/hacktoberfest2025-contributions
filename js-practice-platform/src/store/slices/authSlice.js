import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const server = axios.create({
  baseURL: `${import.meta.env.VITE_API_BACKEND_URL || "http://localhost:8080/"}`
});

export const signup = createAsyncThunk("signup", async(data)=>
{
  try {
    console.log(data.fullname, "passw: "+data.password)
    console.log("email is kkpk: ", email)
    let response = await server.post("/signup", {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("err at fetch", error);
    return error;
  }
});
export const login = createAsyncThunk("login", async(data)=>
{
  
  try {
    console.log(data.email, "pass: "+data.password);
    let response = await server.post("/login", {
      email: data.email,
      password: data.password
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("err at fetch", error);
    return error;
  }
});

const token = localStorage.getItem("token");
const decode = token ? jwtDecode(token): null;
const initialState = {
  user: token? decode : null,
  isAuthenticated: false,
  loading: false,
  token: token ? token :null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // loginSuccess: (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.error = null;
    // },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.token= null;
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder)=>
  {
    builder 
      .addCase(login.fulfilled, (state, action)=>
      {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(signup.fulfilled, (state, action)=>
      {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('token', action.payload.token);
      })
  }
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
