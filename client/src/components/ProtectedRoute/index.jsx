import React, { useEffect, useState } from 'react';
import { Navigate, useLocation  } from 'react-router-dom';
import { isAuthenticated as checkAuthStatus } from "../../service/api"; // Đổi tên hàm để tránh xung đột

const ProtectedRoute = ({ element }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await checkAuthStatus(); 
      setAuthenticated(authStatus);
      setAuthChecked(true);
    };
    checkAuth();
  }, []);

  if (!authChecked) return <div>Loading...</div>;

  return authenticated ? element : <Navigate to="/login"state={{ from: location }} />;
};

export default ProtectedRoute;
