import { MemoryRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';

// 1. Create a mini-component for the Home route
const Home = () => {
  const navigate = useNavigate(); // Hook for navigating via buttons
  
  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="h6">You are on the Home page </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }} 
        onClick={() => navigate('/profile')}
      >
        Go to Profile (Using Hook)
      </Button>
    </Box>
  );
};

// 2. We create a mini-component for the Profile route
const Profile = () => (
  <Box sx={{ textAlign: 'center', mt: 2 }}>
    <Typography variant="h6">You are on the User Profile </Typography>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
        Back to Home (Using Link)
      </Button>
    </Link>
  </Box>
);

// 3. The main component being exported
export default function ReactRouterPage() {
  return (
    <Paper elevation={3} sx={{ maxWidth: 500, margin: '20px auto', padding: 3 }}>
      <Typography variant="h5" gutterBottom align="center" color="primary">
        React Router Demo
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
        Internal navigation using routes without reloading the page.
      </Typography>

      {/* MemoryRouter isolates these routes from your project's actual URL */}
      <MemoryRouter>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3, borderBottom: '1px solid #eee', pb: 2 }}>
          <Link to="/" style={{ fontWeight: 'bold', color: '#1976d2' }}>Route: /home</Link>
          <Link to="/profile" style={{ fontWeight: 'bold', color: '#9c27b0' }}>Route: /profile</Link>
        </Box>

        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </MemoryRouter>
    </Paper>
  );
}