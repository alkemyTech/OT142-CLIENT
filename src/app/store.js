import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  categories  from '../Components/Reducer/ReducerCategories';
import commentsSlice from './slides/comments';

import activitiesReducer from '../Reducers/activitiesSlice';
import usersReducer from '../Components/Dashboard/UsersSlice';
import slidesSlice from './slides/slidesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories,
    activitiesReducer,
    users: usersReducer,
    slides: slidesSlice,
    comments: commentsSlice
  },
});
