// src/context/TodoContext.js
import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
  };

  const updateTodo = (id, title, description) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title, description } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompletion }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
