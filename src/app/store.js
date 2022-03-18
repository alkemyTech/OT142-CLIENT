import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';

import categories from './features/ReducerCategories';
import activitiesReducer from './features/activitiesSlice';
import usersReducer from './features/UsersSlice';
import slidesSlice from './features/slidesSlice';
import commentsSlice from './features/comments';
import newsSlice from './features/newsSlice';

import membersReducer from './features/MembersSlice';


export default configureStore({
  reducer: {
    categories,
    activitiesReducer,
    users: usersReducer,
    slides: slidesSlice,
    comments: commentsSlice,

    auth: authReducer,
    news: newsSlice,
    members: membersReducer

  }
});
