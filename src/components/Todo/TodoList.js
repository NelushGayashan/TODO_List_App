// src/components/Todo/TodoList.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Tooltip, Snackbar } from '@mui/material';
import { Edit, Delete, Check, Clear } from '@mui/icons-material';
import { useTodos } from '../../context/TodoContext';
import EditTodo from './EditTodo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const { todos, toggleCompletion, deleteTodo } = useTodos();
  const [selectedTodo, setSelectedTodo] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setSelectedTodo(null);
  };

  const handleToggleCompletion = (id) => {
    try {
      toggleCompletion(id);
      setSnackbarMessage('Todo status updated!');
      setSnackbarOpen(true);
    } catch (error) {
      toast.error('Failed to update todo status.');
    }
  };

  const handleDelete = (id) => {
    try {
      deleteTodo(id);
      setSnackbarMessage('Todo deleted successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      toast.error('Failed to delete todo.');
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Todo List
      </Typography>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id} sx={{ borderBottom: '1px solid #ddd', p: 1, display: 'flex', alignItems: 'center' }}>
            <ListItemText
              primary={todo.title}
              secondary={todo.description}
              sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            <Tooltip title={todo.completed ? 'Mark as incomplete' : 'Mark as completed'}>
              <IconButton
                onClick={() => handleToggleCompletion(todo.id)}
                sx={{ color: todo.completed ? 'error.main' : 'success.main' }}
              >
                {todo.completed ? <Clear /> : <Check />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton onClick={() => handleEdit(todo)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => handleDelete(todo.id)}
                sx={{ color: 'error.main' }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      {isEditing && <EditTodo open={isEditing} onClose={handleCloseEdit} todo={selectedTodo} />}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackbarOpen(false)}>
            <Clear />
          </IconButton>
        }
      />
    </Box>
  );
};

export default TodoList;
