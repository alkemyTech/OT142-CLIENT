import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, remove } from '../../Services/publicApiService';

export const getUsersList = createAsyncThunk(
  'users/getUsers', async () => {
    return await get(process.env.REACT_APP_USERS)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
);

export const deletetUsersApi = createAsyncThunk(
  'users/deleteUsers', async (id) => {
    return await remove(process.env.REACT_APP_USERS, id)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
);

export const getUserFromName = createAsyncThunk(
  'users/getUsersFromName', async (name) => {
    return await get(process.env.REACT_APP_USERS + `?search=${name}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
);

const initialState = {
  users: [],
  status: 'idle',
  error: null
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Con esta accion se actualiza la lista al eliminar un usuario
    renderUserList: {
      reducer (state, action) {
        const id = action.payload;
        state.users = state.users.filter(user => user.id !== id);
      }
    }
  },
  extraReducers (builder) {
    builder
    // GET
      .addCase(getUsersList.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getUsersList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.data;
      })

      .addCase(getUsersList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

    // GET_FROM_NAME
      .addCase(getUserFromName.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getUserFromName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.data;
      })

      .addCase(getUserFromName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

    // DELETE
      .addCase(deletetUsersApi.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(deletetUsersApi.fulfilled, (state) => {
        state.status = 'succeeded';
      })

      .addCase(deletetUsersApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export const { renderUserList } = usersSlice.actions;
export default usersSlice.reducer;
export const getAllUsers = state => state.users.users;
