import React, { useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import { ToDoProvider } from "./contexts/index";
import { todoList } from "./components/todoList";

function App() {
  const [todo, setTodo] = React.useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id != id));
  };

  const updateTodo = (todo, id) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo))
    );
  };
  const toggleTodo = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const importTodos = todoList;
    setTodo(todoList);
  }, []);

  return (
    <ToDoProvider value={{ todo, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
