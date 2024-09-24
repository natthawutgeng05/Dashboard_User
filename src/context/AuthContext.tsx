import React, { createContext, useContext, useState } from 'react';

// Define the shape of the Auth context
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void; // Function to log in
  logout: () => void; // Function to log out
}

// Create Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to provide context to children
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication

  // Functions to modify authentication state
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children} {/* Render children with access to auth context */}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider'); // Error if used outside provider
  }
  return context; // Return context value
};
