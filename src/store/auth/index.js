import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state = initialState
    },
    login(state, { payload }) {
      state.user = payload
    },
  }
});

export const {
  login,
  logout,
} = authSlice.actions;

export default authSlice.reducer;