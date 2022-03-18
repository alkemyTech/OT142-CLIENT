import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMembers } from "../../Services/membersService";

export const getAllMembers = createAsyncThunk(
  "members/getMembers",
  async () => {
    const response = await getMembers();
    return response.data;
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [getAllMembers.pending]: (state) => {
      state.status = "loading";
    },
    [getAllMembers.fulfilled]: (state, { payload }) => {
      state.members = payload.data;
      state.status = "success";
    },
    [getAllMembers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export const { ALL_MEMBERS } = membersSlice.actions;
export default membersSlice.reducer;
