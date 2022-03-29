import {createSlice} from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    width: window.innerWidth
  },
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload
    }
  }
});

export const {setWidth} = commonSlice.actions;

export default commonSlice.reducer;