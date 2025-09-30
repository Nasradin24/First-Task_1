"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
