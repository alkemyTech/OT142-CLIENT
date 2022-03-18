import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteMember,
  editMember,
  getMembers,
  postMember,
} from "../../Services/membersService";

export const getAllMembers = createAsyncThunk(
  "members/getMembers",
  async () => {
    const response = await getMembers();
    return response.data;
  }
);

export const addMember = createAsyncThunk(
  "members/postMember",
  async (data) => {
    return await postMember(data);
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAllMembers.pending]: (state) => {
      state.status = "loading";
    },
    [getAllMembers.fulfilled]: (state, { payload }) => {
      state.members = payload;
      state.status = "success";
    },
    [getAllMembers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },

    [addMember.pending]: (state) => {
      state.status = "loading";
    },
    [addMember.fulfilled]: (state, action) => {
      state.status = "success";
      state.members = state.members.concat(action.payload);
    },
    [addMember.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export const { ALL_MEMBERS } = membersSlice.actions;
export default membersSlice.reducer;
