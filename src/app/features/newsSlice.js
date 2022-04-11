import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getNews, deleteNews as deleteApiNews, editNews as editApiNews, searchNew } from '../../Services/newsService';
import { get } from '../../Services/publicApiService';

export const searchNews = createAsyncThunk(
  'news/searchNews',
  async (name) => {
    try {
      const response = await get(process.env.REACT_APP_NEWS + `?search=${name}`);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (id) => {
    try {
      const response = await getNews(id);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const filterNews = createAsyncThunk(
  'news/filterNew',
  async (word) => {
    try {
      const response = await searchNew(word);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const editNews = createAsyncThunk(
  'news/editNews',
  async (id, payload) => {
    try {
      const response = await editApiNews(id, payload);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const deleteNovedad = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
    try {
      console.log('borro');
      return await deleteApiNews(id);
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
  reducers: {
    deleteNews: (state, action) => {
      const currentState = current(state);
      const filteredNews = currentState.news.filter(item => item.id !== action.payload);

      return {
        ...currentState,
        news: filteredNews
      };
    }
  },
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
    },
    [searchNews.pending]: (state) => {
      state.status = 'loading';
      state.newsLoading = true;
    },
    [searchNews.fulfilled]: (state, { payload }) => {
      state.news = payload.data;
      state.status = 'success';
      state.newsLoading = false;
      state.newsError = false;
    },
    [searchNews.rejected]: (state) => {
      state.status = 'failed';
      state.newsError = true;
    },
    [filterNews.fulfilled]: (state, { payload }) => {
      state.news = payload.data;
    }
  }
});

export const { deleteNews } = newsSlice.actions;

export default newsSlice.reducer;
