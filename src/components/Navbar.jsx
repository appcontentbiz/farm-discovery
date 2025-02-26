import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Explore,
  Agriculture,
  EmojiPeople,
  Quiz
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { text: 'Explore', path: '/explore', icon: <Explore /> },
    { text: 'Why Farming?', path: '/why-farming', icon: <Agriculture /> },
    { text: 'Success Stories', path: '/success-stories', icon: <EmojiPeople /> },
    { text: 'Find Your Style', path: '/quiz', icon: <Quiz /> },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button
            component={RouterLink}
            to="/"
            color="primary"
            sx={{ textTransform: 'none' }}
          >
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              Farm Discovery
            </Typography>
          </Button>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="inherit"
                startIcon={!isMobile && item.icon}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: isMobile ? 'auto' : undefined,
                }}
              >
                {isMobile ? item.icon : item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
