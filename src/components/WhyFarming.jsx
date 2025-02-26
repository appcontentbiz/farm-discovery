import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocalDining,
  Park,
  People,
  AccountBalance
} from '@mui/icons-material';

const benefits = [
  {
    title: 'Fresh, Healthy Food',
    description: 'Grow your own organic produce and know exactly what goes into your food.',
    icon: LocalDining
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce your carbon footprint and contribute to a more sustainable future.',
    icon: Park
  },
  {
    title: 'Community Connection',
    description: 'Join a vibrant community of local farmers and food enthusiasts.',
    icon: People
  },
  {
    title: 'Economic Benefits',
    description: 'Save money on groceries or potentially start a profitable business.',
    icon: AccountBalance
  }
];

export default function WhyFarming() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          color="primary"
          sx={{ mb: 4 }}
        >
          Why Start Farming?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 2,
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 48,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ mb: 2 }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
