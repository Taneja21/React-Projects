import React from "react";

export const ToDoContext = React.createContext({
  todo: [
    {
      id: 1,
      todo: "Build ToDo app with react",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
  toggleTodo: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export function useTodo() {
  return React.useContext(ToDoContext);
}
