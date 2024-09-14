// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      setUser(userData);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const login = async (userData) => {
    try {
      setUser(userData);
      return Promise.resolve(); 
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
