import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
};

const actions = createSlice({
  name: 'myservice',
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.current = payload;
    },
    logout: (state, { payload }) => {
      state.current = null;
    },
  },
});

export const { user, logout } = actions.actions;
export default actions.reducer;
