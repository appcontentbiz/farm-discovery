import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { WbSunny, Opacity, Timer, CheckCircle, LocalShipping } from '@mui/icons-material';

export default function BalconyGarden() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Balcony Container Garden
        </Typography>
        
        <Typography variant="h5" color="primary" gutterBottom>
          Make the Most of Your Small Space
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Space Requirements
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WbSunny color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Sunlight Exposure" 
                    secondary="Check which parts of your balcony get the most sun"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalShipping color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Weight Considerations" 
                    secondary="Check balcony weight limits for containers"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Essential Equipment
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Containers" 
                    secondary="Various sizes with drainage holes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Potting Mix" 
                    secondary="High-quality, well-draining soil"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Opacity color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Watering System" 
                    secondary="Consider a drip irrigation setup"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recommended Plants
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    name: 'Cherry Tomatoes',
                    details: 'Compact and productive'
                  },
                  {
                    name: 'Bush Beans',
                    details: 'No support needed'
                  },
                  {
                    name: 'Leafy Greens',
                    details: 'Quick growing and repeat harvests'
                  },
                  {
                    name: 'Peppers',
                    details: 'Compact and colorful'
                  },
                  {
                    name: 'Herbs',
                    details: 'Essential for cooking'
                  },
                  {
                    name: 'Dwarf Citrus',
                    details: 'For larger containers'
                  }
                ].map((plant, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={plant.name}
                        secondary={plant.details}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
