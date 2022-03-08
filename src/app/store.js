import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  categories  from '../Components/Reducer/ReducerCategories';

import usersReducer from '../Components/Dashboard/UsersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories,
    users: usersReducer,
  },
});
