import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const allProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      //   console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Product load failed",
      );
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    getAllProducts: null,
    message: null,
    error: null,
  },

  reducers: () => {},

  extraReducers: (builder) => {
    builder
      .addCase(allProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllProducts = action.payload;
        state.message = "Login successful";
        state.error = null;
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.loading = false;
        state.getAllProducts = null;
        state.message = "Product load failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
