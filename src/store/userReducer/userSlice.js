import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login faild",
      );
    }
  },
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    isAuth: false,
    users: null,
    message: null,
    error: null,
  },

  reducers: () => {},

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.users = action.payload;
        state.message = "Login successful";
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.users = null;
        state.message = "Login failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
