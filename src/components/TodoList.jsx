"use client";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    onSuccess: (res) => {
      dispatch(setTodos(res.data.todos));
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to fetch todos!</p>;

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
