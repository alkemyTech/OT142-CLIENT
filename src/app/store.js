import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../Components/Dashboard/UsersSlice';
import authReducer from "../features/auth/authReducer";

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
});
