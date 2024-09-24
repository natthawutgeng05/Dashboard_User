import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Hook for navigation
  const username = location.state?.username; // Retrieve username from location state

  // Handle logout and redirect to login page
  const handleLogout = () => {
    navigate('/'); // Navigate to login page
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Welcome, {username}!</Typography> {/* Display welcome message */}
        <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
