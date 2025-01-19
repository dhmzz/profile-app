import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk untuk fetch data
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {}, // Tambahkan reducer biasa di sini jika diperlukan
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log('action',action)
        state.loading = false;
        state.data = action.payload.products;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
