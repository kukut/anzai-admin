import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authUser: localStorage.getItem("auth-user")
  },
  reducers: {
    login: (state, action) => {
      state.authUser = action.payload
    },
    logout: (state) => {
      state.authUser = null
    }
  }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;