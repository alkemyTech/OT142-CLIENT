import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../Services/authService";


export const registerUser = createAsyncThunk(
    "auth/register",
    async({ name, email, password }, thunkAPI) => {
        try {
            const response = await register(name, email, password);
            return response.data
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue();
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            debugger
            const data = await login(email, password);
            return data
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue();
        }
    }
)



export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "asd",
    user: {},
    autentication: false,
  },
  reducers: {
    userAuthLogout: (state) => {
        state.token = "";
        state.user = {};
        state.autentication = false;
        
    }
  },
  extraReducers: {
      [registerUser.fulfilled]: (state, action) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.autentication = true;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.autentication = true;
    }
  }
});

export const { userAuthLogout } = authSlice.actions;
const { reducer } = authSlice;

export default reducer;
