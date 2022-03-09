import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  categories  from '../Components/Reducer/ReducerCategories';

import activitiesReducer from '../Reducers/activitiesSlice';
import usersReducer from '../Components/Dashboard/UsersSlice';
import authReducer from "../features/auth/authReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories,
    activitiesReducer,
    users: usersReducer,
    auth: authReducer,
  },
});
