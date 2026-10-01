import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "",
        { email, password },
        { headers: { "Content;type": "applican/json" } },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(response.error.message || "Login faild");
    }
  },
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    isAuth: false,
    users: [],
    message: null,
    error: null,
  },

  reducer: () => {},

  extraReducer: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.loading = true;
    }),
    addCase(login.fulfilled, (state,action)=>{
        state.loading = false,
        state.isAuth = true,
        state.users = action.payload,
        state.message = action.payload
    }),
    addCase(login.rejected, (state, action)=>{
        state.isAuth = false,
        state.users = [],
        state.message = action.payload
        state.error = action.payload
    })
  },
});

export default userSlice.reducer;
