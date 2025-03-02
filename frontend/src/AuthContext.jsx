import React, { createContext, useContext, useEffect, useState } from "react";

// Create authentication context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/user/status", {
          credentials: "include",
        });
        const data = await response.json();

        if (response.ok) {
          setIsAuthenticated(true);
          localStorage.setItem("auth", "true");
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("auth");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
        
      }
    };

    checkAuth();
  }, []);

  // Logout function
  const logout = async () => {
    try {
      await fetch("http://127.0.0.1:5000/logout", {
        method: "GET",
        credentials: "include",
      });

      setIsAuthenticated(false);  // Update authentication state
      localStorage.removeItem("auth");  // Clear local storage
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
