import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllActivities = createAsyncThunk(
  'activitiesReducer/getActivities',
  async () => {
    const response = await axios.get(
      'https://ongapi.alkemy.org/api/activities'
    );
    return response.data;
  }
);

export const activitiesSlice = createSlice({
  name: 'activitiesReducer',
  initialState: {
    activities: [],
    status: null
  },
  reducers: {},
  extraReducers: {
    [getAllActivities.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllActivities.fulfilled]: (state, { payload }) => {
      state.activities = payload.data;
      state.status = 'success';
    },
    [getAllActivities.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export const { ALL_ACTIVITIES } = activitiesSlice.actions;
export default activitiesSlice.reducer;
