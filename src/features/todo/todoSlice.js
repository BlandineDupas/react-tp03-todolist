import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
        state.list = [...state.list, action.payload];
    },
    reset: (state) => {
        state.list = [];
    }
  },
});

export const {
    add,
    reset
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.list;

export default todoSlice.reducer;