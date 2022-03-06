import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../Components/Dashboard/UsersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
