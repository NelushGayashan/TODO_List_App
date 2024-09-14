// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock register function
  const register = async (userData) => {
    try {
      // Simulate a successful registration by setting the user data
      setUser(userData);
      return Promise.resolve(); // Simulate successful registration
    } catch (error) {
      return Promise.reject(error); // Simulate registration failure
    }
  };

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
