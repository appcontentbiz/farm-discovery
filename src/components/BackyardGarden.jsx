import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Grid, Divider } from '@mui/material';
import { Terrain, WbSunny, Opacity, Timer, CheckCircle } from '@mui/icons-material';

export default function BackyardGarden() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Backyard Garden Planning
        </Typography>
        
        <Typography variant="h5" color="primary" gutterBottom>
          Transform Your Yard into a Food Forest
        </Typography>

        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Site Planning
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <WbSunny color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Sun Mapping" 
                secondary="Track sun patterns across your yard throughout the day"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Terrain color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Soil Testing" 
                secondary="Get your soil tested for pH and nutrients"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Opacity color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Water Access" 
                secondary="Plan irrigation systems and water collection"
              />
            </ListItem>
          </List>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Garden Bed Options
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="In-Ground Beds" 
                    secondary="Traditional, requires good soil"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Raised Beds" 
                    secondary="Better drainage, less bending"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Hugelkultur" 
                    secondary="Self-fertilizing mound system"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Essential Tools
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Hand Tools" 
                    secondary="Trowel, pruners, rake, hoe"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Irrigation" 
                    secondary="Soaker hoses or drip systems"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Composting Setup" 
                    secondary="Bin or tumbler system"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Seasonal Planting Guide
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Spring
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Leafy Greens" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Peas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Root Vegetables" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Summer
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Tomatoes" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Peppers" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                  <ListItemText primary="Squash" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
