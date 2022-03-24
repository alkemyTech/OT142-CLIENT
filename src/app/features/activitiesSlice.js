import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getActivities, deleteActivity as deleteApiActivity, getSearchActivities } from '../../Services/activitiesService';
// import axios from 'axios';

export const getAllActivities = createAsyncThunk(
  'activities/getAllActivities',
  async (id) => {
    try {
      const response = await getActivities(id);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const getOnChangeActivities = createAsyncThunk(
  'activities/getOnChangeActivities',
  async (word) => {
    try {
      const response = await getSearchActivities(word);
      return response;
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const deleteActivity = createAsyncThunk(
  'activities/deleteActivity',
  async (id) => {
    try {
      return await deleteApiActivity(id);
    } catch (error) {
      console.log(error, 'ERROR');
    }
  }
);

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    status: null
  },
  reducers: {
    deleteActivities: (state, action) => {
      const currentState = current(state);
      const filteredActivities = currentState.activities.filter(item => item.id !== action.payload);

      return {
        ...currentState,
        activities: filteredActivities
      };
    }
  },
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
    },
    [getOnChangeActivities.fulfilled]: (state, { payload }) => {
      state.activities = payload.data;
    }
  }
});

export const { deleteActivities, searchActivities } = activitiesSlice.actions;
export default activitiesSlice.reducer;
