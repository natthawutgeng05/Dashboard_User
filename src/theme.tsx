import { createTheme } from '@mui/material';

// Define custom breakpoints and theme settings
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Create a theme with custom breakpoints and typography
const theme = createTheme({
  breakpoints,
  spacing: 8,
  typography: {
    h4: {
      fontSize: '1.5rem',
      [breakpoints.values.sm]: {
        fontSize: '2rem', // Responsive font size for small screens
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '16px', // Default padding for container
          margin: '0 auto', // Center container
        },
      },
    },
  },
});

export default theme; // Export theme for use in application
