import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMenus(state, { payload }) {
      state.menus = payload
    },
    addMenu(state, { payload }){
      if(!!state.menus.find(x => x.id === payload.id)) return
      state.menus = [ ...state.menus, payload ]
    }
  }
});

export const {
  addMenu,
  setMenus
} = dataSlice.actions;

export default dataSlice.reducer;