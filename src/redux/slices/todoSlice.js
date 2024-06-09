import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "react 연습",
    task: "react 연습하기",
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const newState = state.filter((eachState) => eachState.id !== id);
      return newState;
    },
    updateTodo: (state, action) => {
      const id = action.payload;
      const newState = state.map((eachState) =>
        eachState.id === id
          ? { ...eachState, isDone: !eachState.isDone }
          : eachState
      );
      return newState;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
