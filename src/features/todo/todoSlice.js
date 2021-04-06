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
    },
    setToDone: (state, action) => {
        state.list = state.list.map((current) => (
            current.title === action.payload.title
            ? {...current, isDone: true}
            : current
        ))
    },
    setToUndone: (state, action) => {
        state.list = state.list.map((current) => (
            current.title === action.payload.title
            ? {...current, isDone: false}
            : current
        ))
    }
  },
});

export const {
    add,
    reset,
    setToDone,
    setToUndone
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.list;

export default todoSlice.reducer;