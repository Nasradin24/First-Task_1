"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../utils/api";
import { useDispatch } from "react-redux";
import { addLocalTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";
import { useState } from "react";

export default function TodoForm() {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (newTodo) => addTodo(newTodo),
    onSuccess: (res) => {
      dispatch(addLocalTodo(res.data));
      queryClient.invalidateQueries(["todos"]);
      toast.success("Todo added!");
      setText("");
    },
    onError: () => toast.error("Failed to add todo!"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return toast.error("Enter a todo!");
    mutation.mutate({ todo: text, completed: false, userId: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
