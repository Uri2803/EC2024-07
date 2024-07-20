import React from 'react';
import { CssBaseline, Box, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <Router>
    <Box>
      <Routes>
        {routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element={<route.component/>}
          />
        ))}
        <Route path="*" element={<Mainpage  />} />
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
