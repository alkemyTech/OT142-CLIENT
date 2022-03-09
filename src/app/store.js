import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../Reducers/activitiesSlice';
import usersReducer from '../Components/Dashboard/UsersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    activitiesReducer,
    users: usersReducer,
  },
});
