import { configureStore } from '@reduxjs/toolkit';
import categories from './features/ReducerCategories';
import activitiesReducer from './features/activitiesSlice';
import usersReducer from './features/UsersSlice';
import slidesSlice from './features/slidesSlice';
import commentsSlice from './features/comments';

export default configureStore({
  reducer: {
    categories,
    activitiesReducer,
    users: usersReducer,
    slides: slidesSlice,
    comments: commentsSlice
  }
});
