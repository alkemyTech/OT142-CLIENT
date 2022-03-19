import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getComment, postComment, deleteComment, editComment } from '../../Services/commentsService';

export const getCommentReducer = createAsyncThunk(
  'comments/getCommentReducer',
  async (id) => {
    try {
      return await getComment(id);
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const postCommentReducer = createAsyncThunk(
  'comments/postCommentReducer',
  async () => {
    try {
      return await postComment().then(res => console.log('res', res));
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const editCommentReducer = createAsyncThunk(
  'comments/editCommentReducer',
  async () => {
    try {
      return await editComment().then(res => console.log('res', res));
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const deleteCommentReducer = createAsyncThunk(
  'comments/deleteCommentReducer',
  async () => {
    try {
      return await deleteComment().then(res => console.log('res', res));
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: null,
    error: null
  },
  extraReducers: {
    [getCommentReducer.pending]: (state) => {
      state.status = 'loading';
    },
    [getCommentReducer.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.comments = payload.data;
    },
    [getCommentReducer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },

    [postCommentReducer.pending]: (state) => {
      state.status = 'loading';
    },
    [postCommentReducer.fulfilled]: (state, action) => {
      state.status = 'success';
      state.comments = state.comments.concat(action.payload);
    },
    [postCommentReducer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },

    [editCommentReducer.pending]: (state) => {
      state.status = 'loading';
    },
    [editCommentReducer.fulfilled]: (state, action) => {
      state.status = 'success';
      state.comments = {};
    },
    [editCommentReducer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },

    [deleteCommentReducer.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteCommentReducer.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.comments = state.comments.filter(({ id }) => id !== payload);
    },
    [deleteCommentReducer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    }
  }
});

export default commentsSlice.reducer;
