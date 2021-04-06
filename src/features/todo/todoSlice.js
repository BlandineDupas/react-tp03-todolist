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
  },
});

export const { add } = todoSlice.actions;
console.log((state) => state.todo);
export const selectTodos = (state) => state.todo.list;

export default todoSlice.reducer;