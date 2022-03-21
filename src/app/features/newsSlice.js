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
    status: null,
    newsError: false,
    newsLoading: true
  },
  reducers: {},
  extraReducers: {
    [getAllNews.pending]: (state) => {
      state.status = 'loading';
      state.newsLoading = true;
    },
    [getAllNews.fulfilled]: (state, { payload }) => {
      state.news = payload.data;
      state.status = 'success';
      state.newsLoading = false;
      state.newsError = false;
    },
    [getAllNews.rejected]: (state) => {
      state.status = 'failed';
      state.newsError = true;
    }
  }
});

export default newsSlice.reducer;
