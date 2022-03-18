import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async () => {
    const response = await axios.get(
      'https://ongapi.alkemy.org/api/news'
    );
    return response.data;
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: null
  },
  reducers: {},
  extraReducers: {
    [getAllNews.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllNews.fulfilled]: (state, { payload }) => {
      state.news = payload.data;
      state.status = 'success';
    },
    [getAllNews.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default newsSlice.reducer;
