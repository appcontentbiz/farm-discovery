import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InteractiveFarmExplorer from './components/InteractiveFarmExplorer';
import WhyFarming from './components/WhyFarming';
import SuccessStories from './components/SuccessStories';
import FarmingQuiz from './components/FarmingQuiz';
import UrbanWindowGarden from './components/UrbanWindowGarden';
import BalconyGarden from './components/BalconyGarden';
import BackyardGarden from './components/BackyardGarden';
import Navbar from './components/Navbar';

// Update document title
document.title = 'Farm Discovery - Start Your Farming Journey';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green
      light: '#60ad5e',
      dark: '#005005',
    },
    secondary: {
      main: '#558b2f', // Orange
      light: '#85bb5c',
      dark: '#255d00',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
            <Container maxWidth="lg">
              <Routes>
                <Route path="/" element={
                  <Box>
                    <InteractiveFarmExplorer />
                    <WhyFarming />
                    <SuccessStories />
                    <FarmingQuiz />
                  </Box>
                } />
                <Route path="/explore" element={<InteractiveFarmExplorer />} />
                <Route path="/why-farming" element={<WhyFarming />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/quiz" element={<FarmingQuiz />} />
                <Route path="/urban-window" element={<UrbanWindowGarden />} />
                <Route path="/balcony-garden" element={<BalconyGarden />} />
                <Route path="/backyard-garden" element={<BackyardGarden />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
