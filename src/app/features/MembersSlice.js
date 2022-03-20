/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMembers } from '../../Services/membersService';

export const getMembersList = createAsyncThunk(
  'members/getMembers',
  async () => {
    return await getMembers()
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

export const deleteMemberApi = createAsyncThunk(
  'members/deleteMembers',
  async (id) => {
    return await getMembers(id)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const initialState = {
  members: [],
  status: 'idle',
  error: null,
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    renderMembersList: {
      reducer(state, action) {
        const id = action.payload;
        state.members = state.members.filter((member) => member.id !== id);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMembersList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMembersList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members = state.members.concat(action.payload);
      })
      .addCase(getMembersList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(deleteMemberApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteMemberApi.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteMemberApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { renderMembersList } = membersSlice.actions;
export default membersSlice.reducer;
export const getAllMembers = state => state.members.members;