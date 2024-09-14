// src/components/Todo/TodoItem.js
import React from 'react';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const handleDelete = async () => {
    try {
      await onDelete(todo.id); // Assuming onDelete is async
      toast.success('Todo deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete todo.');
    }
  };

  const handleToggle = () => {
    try {
      onToggle(todo.id);
      toast.success(todo.completed ? 'Todo marked as incomplete!' : 'Todo marked as completed!');
    } catch (error) {
      toast.error('Failed to update todo status.');
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title} - {todo.description}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
