import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import slidesSlice from './slides/slidesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    slides: slidesSlice
  },
});
