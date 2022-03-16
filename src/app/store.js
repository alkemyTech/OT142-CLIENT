import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> af7ef96cb235e8abd0ad07d5ae31cc3a15d67a12
import categories from './features/ReducerCategories';
import activitiesReducer from './features/activitiesSlice';
import usersReducer from './features/UsersSlice';
import slidesSlice from './features/slidesSlice';
import commentsSlice from './features/comments';
<<<<<<< HEAD
import authReducer from "./features/authSlice";
=======
=======
import categories from './features/ReducerCategories'
import activitiesReducer from './features/activitiesSlice'
import usersReducer from './features/UsersSlice'
import slidesSlice from './features/slidesSlice'
import commentsSlice from './features/comments'
>>>>>>> af7ef96cb235e8abd0ad07d5ae31cc3a15d67a12
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
    auth: authReducer,
    news: newsSlice
  },
>>>>>>> aa2bbad93c2d78f97f78aae5302f0ae1640ee5ae
});
