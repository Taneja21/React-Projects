import React, { useState } from "react";
import { useTodo } from "../contexts/index";

function ToDoForm() {
  const { addTodo } = useTodo();

  const [todo, setTodo] = useState({});
  function add(e) {
    setTodo({ todo: e.target.value, completed: false });
    addTodo(todo);
  }

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={add}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default ToDoForm;
