import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-10 p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
