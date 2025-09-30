import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addLocalTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeLocalTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleLocalTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { setTodos, addLocalTodo, removeLocalTodo, toggleLocalTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
