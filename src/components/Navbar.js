import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">
          FOODIEDELIGHT
        </Button>
        </Typography>
           <Button color="inherit" component={Link} to="/add" >
          Add New Restaurant
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
