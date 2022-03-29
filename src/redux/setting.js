import {createSlice} from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    openDrawerSidebar: false,
    collapseSidebar: false
  },
  reducers: {
    setOpenDrawerSidebar: (state, action) => {
      state.openDrawerSidebar = action.payload
    },
    setCollapseSidebar: (state, action) => {
      state.collapseSidebar = action.payload
    }
  }
});

export const {setOpenDrawerSidebar, setCollapseSidebar} = settingSlice.actions;

export default settingSlice.reducer;