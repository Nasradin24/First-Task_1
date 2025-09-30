import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getTodos = () => API.get("/todos");
export const addTodo = (todo) => API.post("/todos/add", todo);
export const updateTodo = (id, data) => API.patch(`/todos/${id}`, data);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
