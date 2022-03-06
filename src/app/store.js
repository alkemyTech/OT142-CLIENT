import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ActivitiesReducer from '../Reducers/activitiesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    ActivitiesReducer: ActivitiesReducer
  },
});
