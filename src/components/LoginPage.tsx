import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Fade, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '../context/AuthContext';

// Mock user credentials for authentication
const mockUser = {
  username: 'admin',
  password: 'password',
};

const LoginPage: React.FC = () => {
  const { login } = useAuth(); // Access authentication context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const theme = useTheme(); // Access theme for styling

  // Handle login logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (username === mockUser.username && password === mockUser.password) {
      login(); // Set authentication state
      navigate('/dashboard', { state: { username } }); // Redirect to dashboard with username
    } else {
      setError('Invalid username or password'); // Show error message for invalid credentials
    }
  };


  return (
    <Container maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Fade in={true} timeout={500}>
        <Box
          sx={{
            padding: theme.spacing(2),
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login Page
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: '20px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)', // Scale effect on hover
                },
              }}
            >
              Login
            </Button>
          </form>
          {error && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              sx={{ marginTop: '20px' }}
            >
              {error} {/* Display error message */}
            </Typography>
          )}
        </Box>
      </Fade>
    </Container>
  );
};

export default LoginPage;
