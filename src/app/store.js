import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import categories from './features/ReducerCategories';
import activitiesReducer from './features/activitiesSlice';
import usersReducer from './features/UsersSlice';
import slidesSlice from './features/slidesSlice';
import commentsSlice from './features/comments';
=======
import categories from './features/ReducerCategories'
import activitiesReducer from './features/activitiesSlice'
import usersReducer from './features/UsersSlice'
import slidesSlice from './features/slidesSlice'
import commentsSlice from './features/comments'
import newsSlice from './features/newsSlice'
>>>>>>> aa2bbad93c2d78f97f78aae5302f0ae1640ee5ae

export default configureStore({
  reducer: {
    categories,
    activitiesReducer,
    users: usersReducer,
    slides: slidesSlice,
<<<<<<< HEAD
    comments: commentsSlice
  }
=======
    comments: commentsSlice,
    news: newsSlice
  },
>>>>>>> aa2bbad93c2d78f97f78aae5302f0ae1640ee5ae
});
