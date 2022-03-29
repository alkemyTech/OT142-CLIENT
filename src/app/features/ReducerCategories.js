import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: []
  },
  reducers: {
    setCategoriesList: (state, accion) => {
      state.list = accion.payload;
    }
  }
});

export const { setCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;

// export const getAllCategories = () => (dispatch)=>{
//   var BASE_URL = `http://ongapi.alkemy.org/api/categories?limit=5`;
//   axios.get(BASE_URL).then((res) => {
//     dispatch( setCategoriesList(res.data.data))
//   })
//   .catch((err)=>{console.log(err)})
// };

export const getAllCategories = () => (dispatch) => {
  const BASE_URL = 'https://ongapi.alkemy.org/api/categories?limit=3';
  axios.get(BASE_URL).then((res) => {
    dispatch(setCategoriesList(res.data.data));
  })
    .catch((err) => { console.log(err); });
};
// ?limit=5

getAllCategories();
