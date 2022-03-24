import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../Services/publicApiService';

export const getCategoriesList = createAsyncThunk(
  'categories/getCategories',
  async () => {
    return await get(process.env.REACT_APP_CATEGORIES)
      .then((res) => res.data.data)
      .catch((error) => console.log(error));
  }
);
export const getCategorieByName = createAsyncThunk(
  'categories/getCategorieByName', async (name) => {
    return await get(process.env.REACT_APP_CATEGORIES + `?search=${name}`)
      .then(res => res.data.data)
      .catch(error => console.log(error));
  }
);

const initialState = {
  categories: [],
  status: 'idle',
  error: null
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    renderCategoriesList: {
      reducer (state, action) {
        const id = action.payload;
        state.categories = state.categories.filter((categorie) => categorie.id !== id);
      }
    }
  },
  extraReducers (builder) {
    builder
    // GET
      .addCase(getCategoriesList.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })

      .addCase(getCategoriesList.rejected, (state, action) => {
        state.status = 'failed';
        state.categories = action.error.message;
      })
      // GET BY NAME
      .addCase(getCategorieByName.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getCategorieByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })

      .addCase(getCategorieByName.rejected, (state, action) => {
        state.status = 'failed';
        state.categories = action.error.message;
      });
  }
});

export const { renderCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const getAllCategories = state => state.categories.categories;

// export const getAllCategories = () => (dispatch)=>{
//   var BASE_URL = `http://ongapi.alkemy.org/api/categories?limit=5`;
//   axios.get(BASE_URL).then((res) => {
//     dispatch( setCategoriesList(res.data.data))
//   })
//   .catch((err)=>{console.log(err)})
// };

// export const getAllCategories = () => (dispatch) => {
//  const BASE_URL = 'https://ongapi.alkemy.org/api/categories?limit=3';
//  axios.get(BASE_URL).then((res) => {
//    dispatch(setCategoriesList(res.data.data));
//  })
//    .catch((err) => { console.log(err); });
// };
// ?limit=5

// getAllCategories();
