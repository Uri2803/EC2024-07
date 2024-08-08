import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import routes from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {routes.map((route) => {
            if (route.protected) {
              console.log('tt: ' ,route.protected )
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<ProtectedRoute isAuthenticated={route.isAuthenticated} element={<route.component />} />}
                />
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            }
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
