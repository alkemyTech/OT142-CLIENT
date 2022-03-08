import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  categories  from '../Components/Reducer/ReducerCategories';


export default configureStore({
  reducer: {
    counter: counterReducer,
    categories
  },
});
