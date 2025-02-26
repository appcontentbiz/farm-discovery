import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { WbSunny, Opacity, Timer, CheckCircle } from '@mui/icons-material';

export default function UrbanWindowGarden() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Urban Window Garden Guide
        </Typography>
        
        <Typography variant="h5" color="primary" gutterBottom>
          Perfect for Beginners
        </Typography>

        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Essential Requirements
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <WbSunny color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Sunlight" 
                secondary="A window that receives at least 4-6 hours of direct sunlight daily"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Opacity color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Water" 
                secondary="Access to water and good drainage for your containers"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Timer color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Time" 
                secondary="5-10 minutes daily for watering and plant care"
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Best Plants to Start With
          </Typography>
          <List>
            {[
              'Basil - Great for cooking and easy to grow',
              'Mint - Very hardy and spreads easily',
              'Chives - Compact and long-lasting',
              'Cherry Tomatoes - If you have good sunlight',
              'Microgreens - Quick results in small spaces'
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Monthly Care Guide
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Week 1" 
                secondary="Plant your seeds or seedlings in well-draining potting mix"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Week 2" 
                secondary="Monitor water levels daily - soil should be moist but not waterlogged"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Week 3" 
                secondary="Start fertilizing with diluted organic fertilizer"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Week 4" 
                secondary="Prune any yellowing leaves and harvest mature herbs"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
