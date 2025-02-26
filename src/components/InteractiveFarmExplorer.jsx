import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid,
  IconButton,
  CardMedia,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';

const farmTypes = [
  {
    id: 1,
    name: 'Urban Window Garden',
    description: 'Perfect for apartment dwellers! Start your farming journey with a simple windowsill herb garden.',
    difficulty: 'Super Easy',
    spaceNeeded: 'Just a sunny window',
    timeCommitment: '5 minutes daily',
    image: '/images/window-garden.jpg',
    quickStart: [
      'Choose a sunny window',
      'Get 2-3 small pots',
      'Start with basil or mint',
      'Water when soil feels dry'
    ]
  },
  {
    id: 2,
    name: 'Balcony Container Garden',
    description: 'Transform your balcony into a mini farm with container growing!',
    difficulty: 'Easy',
    spaceNeeded: 'A balcony or patio',
    timeCommitment: '10 minutes daily',
    image: '/images/balcony-garden.jpg',
    quickStart: [
      'Check sunlight hours',
      'Get large containers',
      'Choose compact vegetables',
      'Set up basic irrigation'
    ]
  },
  {
    id: 3,
    name: 'Backyard Plot',
    description: 'Ready for more? Turn part of your backyard into a productive garden!',
    difficulty: 'Medium',
    spaceNeeded: '100+ square feet',
    timeCommitment: '30 minutes daily',
    image: '/images/backyard-garden.jpg',
    quickStart: [
      'Test your soil',
      'Plan your layout',
      'Start composting',
      'Begin with easy crops'
    ]
  }
];

export default function InteractiveFarmExplorer() {
  const [currentFarm, setCurrentFarm] = useState(0);

  const handleNext = () => {
    setCurrentFarm((prev) => (prev + 1) % farmTypes.length);
  };

  const handlePrev = () => {
    setCurrentFarm((prev) => (prev - 1 + farmTypes.length) % farmTypes.length);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Discover Your Perfect Start
      </Typography>
      
      <Box sx={{ position: 'relative', my: 4 }}>
        <motion.div
          key={currentFarm}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Card sx={{ maxWidth: 800, mx: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={farmTypes[currentFarm].image}
              alt={farmTypes[currentFarm].name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {farmTypes[currentFarm].name}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {farmTypes[currentFarm].description}
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" color="primary">Difficulty</Typography>
                  <Typography variant="body2">{farmTypes[currentFarm].difficulty}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" color="primary">Space Needed</Typography>
                  <Typography variant="body2">{farmTypes[currentFarm].spaceNeeded}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" color="primary">Time</Typography>
                  <Typography variant="body2">{farmTypes[currentFarm].timeCommitment}</Typography>
                </Grid>
              </Grid>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Quick Start Guide
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {farmTypes[currentFarm].quickStart.map((step, index) => (
                  <Typography component="li" key={index} variant="body2">
                    {step}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="contained" color="primary">
                  Learn More About This Style
                </Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        <IconButton
          onClick={handlePrev}
          sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
}
