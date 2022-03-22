import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from '../../Services/newsService';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (id) => {
    try {
      return await getNews(id);
    } catch (error) {
      console.log(error, 'ERROR');
    }
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
