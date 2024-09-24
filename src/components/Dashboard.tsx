import React, { useState } from 'react';
import {
  Box,
  Typography,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  TablePagination,
  Fade,
  Collapse,
  Container,
  Avatar,
  Grid,
  Tooltip,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from './Navbar';
import { useTheme } from '@mui/material/styles';

// Mock user data for display
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 29, address: '123 Main St, City A' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34, address: '456 Oak St, City B' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 25, address: '789 Pine St, City C' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', age: 40, address: '101 Maple St, City D' },
  { id: 5, name: 'Charlie Green', email: 'charlie@example.com', age: 31, address: '112 Birch St, City E' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 28, address: '213 Cedar St, City F' },
  { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 37, address: '314 Elm St, City G' },
  { id: 8, name: 'Fiona Gallagher', email: 'fiona@example.com', age: 22, address: '415 Maple St, City H' },
  { id: 9, name: 'George Lucas', email: 'george@example.com', age: 45, address: '516 Oak St, City I' },
  { id: 10, name: 'Hannah Montana', email: 'hannah@example.com', age: 19, address: '617 Pine St, City J' },
  { id: 11, name: 'Ian Malcolm', email: 'ian@example.com', age: 50, address: '718 Willow St, City K' },
  { id: 12, name: 'Jack Sparrow', email: 'jack@example.com', age: 33, address: '819 Birch St, City L' },
  { id: 13, name: 'Kate Winslet', email: 'kate@example.com', age: 30, address: '920 Maple St, City M' },
  { id: 14, name: 'Leo Messi', email: 'leo@example.com', age: 35, address: '1021 Oak St, City N' },
  { id: 15, name: 'Mia Wallace', email: 'mia@example.com', age: 27, address: '1122 Elm St, City O' },
  { id: 16, name: 'Nina Simone', email: 'nina@example.com', age: 41, address: '1223 Cedar St, City P' },
  { id: 17, name: 'Oliver Twist', email: 'oliver@example.com', age: 36, address: '1324 Pine St, City Q' },
  { id: 18, name: 'Paul Rudd', email: 'paul@example.com', age: 42, address: '1425 Maple St, City R' },
  { id: 19, name: 'Quinn Fabray', email: 'quinn@example.com', age: 29, address: '1526 Birch St, City S' },
  { id: 20, name: 'Rita Hayworth', email: 'rita@example.com', age: 38, address: '1627 Oak St, City T' },
];


const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);

  // Filter users based on search query
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pagination changes
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage); // Update current page
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
    setPage(0); // Reset to first page
  };

  // Clear search input and selected user
  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedUser(null);
  };

  // Paginate displayed users
  const displayedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Navbar />
      <Fade in={true} timeout={500}>
        <Container maxWidth="lg" sx={{ padding: theme.spacing(2) }}>
          <Box
            sx={{
              padding: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">Dashboard</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                gap: theme.spacing(2),
                marginBottom: theme.spacing(2),
              }}
            >
              <Tooltip title={searchQuery.length > 20 ? searchQuery : ''} arrow>
                <TextField
                  variant="outlined"
                  label="Search users by name or email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    flexGrow: 1,
                    minWidth: '200px',
                    '& .MuiInputBase-input': {
                      fontSize: '0.875rem',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.75rem',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '0.875rem',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.75rem',
                      },
                    },
                  }}
                />
              </Tooltip>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClearSearch}
                startIcon={<ClearIcon />}
                sx={{
                  padding: theme.spacing(1, 2),
                  fontSize: '0.875rem',
                  [theme.breakpoints.down('sm')]: {
                    padding: theme.spacing(0.75, 1.5),
                    fontSize: '0.75rem',
                    minWidth: '90px',
                  },
                }}
              >
                Clear
              </Button>
            </Box>

            <Grid container spacing={theme.spacing(2)} justifyContent="center" paddingLeft={0} sx={{ margin: 0, '& > .MuiGrid-item': { paddingLeft: '0px' } }} >
              {displayedUsers.map((user) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={user.id} >
                  <ListItemButton
                    onClick={() => setSelectedUser(user)}
                    sx={{
                      position: 'relative',
                      marginBottom: theme.spacing(2),
                      padding: theme.spacing(1),
                      borderRadius: theme.shape.borderRadius,
                    }}
                  >
                    <Avatar
                      sx={{
                        position: 'absolute',
                        top: theme.spacing(1),
                        left: theme.spacing(1),
                        width: theme.spacing(5),
                        height: theme.spacing(5),
                      }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                    <Tooltip title={`${user.name}\n${user.email}`}>
                      <ListItemText
                        primary={user.name}
                        secondary={user.email}
                        sx={{
                          marginLeft: theme.spacing(6),
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      />
                    </Tooltip>
                  </ListItemButton>
                </Grid>
              ))}
            </Grid>

            <Collapse in={Boolean(selectedUser)} timeout={500}>
              <Box
                sx={{
                  marginTop: theme.spacing(3),
                  padding: theme.spacing(3),
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: theme.shape.borderRadius,
                  width: '70%',
                  minWidth: '300px',
                  position: 'relative',
                }}
              >
                {selectedUser && (
                  <>
                    <Avatar
                      sx={{
                        position: 'absolute',
                        top: theme.spacing(1),
                        right: theme.spacing(2),
                        width: theme.spacing(6),
                        height: theme.spacing(6),
                      }}
                    >
                      {selectedUser.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" sx={{ marginTop: theme.spacing(2) }}>
                      Details for {selectedUser.name}
                    </Typography>
                    <Typography>
                      <strong>Email:</strong> {selectedUser.email}
                    </Typography>
                    <Typography>
                      <strong>Age:</strong> {selectedUser.age}
                    </Typography>
                    <Typography>
                      <strong>Address:</strong> {selectedUser.address}
                    </Typography>
                  </>
                )}
              </Box>
            </Collapse>

            <TablePagination
              rowsPerPageOptions={[6, 12, 24]}
              component="div"
              count={filteredUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Container>
      </Fade>
    </>
  );
};

export default Dashboard;