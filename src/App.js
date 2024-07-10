import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantForm from './components/RestaurantForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/add" element={<RestaurantForm />} />
            <Route path="/edit/:id" element={<RestaurantForm />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
