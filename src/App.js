import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';
import { Container, Typography, Box, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const { user, logout } = useAuth();
  const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('You have successfully logged out!');
  };

  const handleOpenAddTodo = () => {
    setIsAddTodoOpen(true);
  };

  const handleCloseAddTodo = () => {
    setIsAddTodoOpen(false);
  };

  return (
    <Router>
      <TodoProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#fafafa', // Enhanced background color
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" // Theme customization for better visuals
          />
          <Box component="header" sx={{ p: 3, borderBottom: '1px solid #e0e0e0', bgcolor: '#ffffff' }}>
            <Typography variant="h2" gutterBottom>
              Todo List App
            </Typography>
          </Box>
          <Container component="main" sx={{ flex: 1, p: 3 }}>
            {user ? (
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                  sx={{ mr: 2, mb: 2, px: 4, py: 1 }}
                >
                  Logout
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenAddTodo}
                  sx={{ mb: 2, px: 4, py: 1 }}
                >
                  Add TODOs
                </Button>
                <AddTodo open={isAddTodoOpen} onClose={handleCloseAddTodo} />
                <TodoList />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    Welcome to the app.
                  </Typography>
                  <Typography variant="body1">
                    Please login or register to continue.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '1px',
                    backgroundColor: '#e0e0e0',
                    height: 'auto',
                    mx: 2,
                  }}
                />
                <Box sx={{ flex: 1, p: 2 }}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {user ? (
                      <Route path="/" element={<Navigate to="/todos" />} />
                    ) : (
                      <Route path="/" element={<Navigate to="/login" />} />
                    )}
                    <Route path="*" element={<Navigate to={user ? "/todos" : "/login"} />} />
                  </Routes>
                </Box>
              </Box>
            )}
          </Container>
          <Box
            component="footer"
            sx={{
              p: 2,
              mt: 'auto',
              borderTop: '1px solid #e0e0e0',
              textAlign: 'center',
              bgcolor: '#ffffff',
            }}
          >
            <Typography variant="body2">
              Todo List App &copy; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </TodoProvider>
    </Router>
  );
};

const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Root;
