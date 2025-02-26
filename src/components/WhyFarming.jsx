import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container
} from '@mui/material';
import {
  LocalDining,
  Eco,
  People,
  AccountBalance
} from '@mui/icons-material';

const benefits = [
  {
    title: 'Personal Well-being',
    icon: LocalDining,
    description: 'Grow your own fresh, nutritious food while enjoying a fulfilling outdoor activity that reduces stress and improves mental health.',
    image: '/images/wellbeing.jpg'
  },
  {
    title: 'Environmental Impact',
    icon: Eco,
    description: 'Be part of the solution! Reduce food miles, support biodiversity, and help create a more sustainable food system.',
    image: '/images/environment.jpg'
  },
  {
    title: 'Community Connection',
    icon: People,
    description: 'Join a vibrant community of growers, share knowledge, and build meaningful connections with like-minded people.',
    image: '/images/community.jpg'
  },
  {
    title: 'Economic Opportunity',
    icon: AccountBalance,
    description: 'Start small and grow big! From saving on groceries to building a profitable business, farming offers various economic benefits.',
    image: '/images/economic.jpg'
  }
];

export default function WhyFarming() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Why Start Farming?
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Discover the many rewards of growing your own food
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit) => (
            <Grid item xs={12} md={6} key={benefit.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={benefit.image}
                  alt={benefit.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            "The best time to start was yesterday. The second best time is today."
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Join thousands of others who have discovered the joy of growing their own food
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
