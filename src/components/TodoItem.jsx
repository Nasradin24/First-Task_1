"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo, deleteTodo } from "../utils/api";
import { useDispatch } from "react-redux";
import { removeLocalTodo, toggleLocalTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";

export default function TodoItem({ todo }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const toggleMutation = useMutation({
    mutationFn: () => updateTodo(todo.id, { completed: !todo.completed }),
    onSuccess: () => {
      dispatch(toggleLocalTodo(todo.id));
      queryClient.invalidateQueries(["todos"]);
      toast.success("Todo updated!");
    },
    onError: () => toast.error("Failed to update!"),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      dispatch(removeLocalTodo(todo.id));  
      toast.success("Todo deleted!");
    },
    onError: () => {
      dispatch(removeLocalTodo(todo.id));
      toast("Deleted locally (API not persistent)");
    },
  });

  return (
    <li className="flex justify-between items-center border-b p-2">
      <span
        onClick={() => toggleMutation.mutate()}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
      >
        {todo.todo}
      </span>
      <button
        onClick={() => deleteMutation.mutate()}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}
