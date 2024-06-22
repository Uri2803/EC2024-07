import React from 'react';
import { CssBaseline, Box, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import routes from './routes';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

function App() {
  return (
    <Wrapper>
      
      <Router>
      <Header />
        <Box sx={{ minWidth: "100%", height: "100vh", display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1 }}>
          
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Box>
          </Box>
      
      </Router>
    </Wrapper>
  );
}

export default App;
