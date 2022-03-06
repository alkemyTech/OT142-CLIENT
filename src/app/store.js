import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../Reducers/activitiesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    activitiesReducer
  },
});
