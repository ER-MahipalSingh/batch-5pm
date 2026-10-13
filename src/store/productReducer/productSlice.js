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

export const productDetails = createAsyncThunk(
  "products/singleProducts",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
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
    singleProduct: null,
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
        // state.message = "Login successful";
        state.error = null;
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.loading = false;
        state.getAllProducts = null;
        state.message = "Product load failed";
        state.error = action.payload;
      })

      .addCase(productDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(productDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
        // state.message = "Login successful";
        state.error = null;
      })
      .addCase(productDetails.rejected, (state, action) => {
        state.loading = false;
        state.singleProduct = null;
        state.message = "Product load failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
