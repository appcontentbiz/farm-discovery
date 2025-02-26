import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container
} from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stories = [
  {
    name: 'Sarah Chen',
    title: 'Urban Professional to Rooftop Farmer',
    avatar: '/images/sarah.jpg',
    story: 'Started with a few herbs on her apartment windowsill. Now manages a successful rooftop garden that supplies local restaurants.',
    firstSteps: [
      'Started with basil and mint',
      'Joined a community garden',
      'Took weekend workshops',
      'Experimented with container growing'
    ]
  },
  {
    name: 'Marcus Johnson',
    title: 'Teacher Turned Market Gardener',
    avatar: '/images/marcus.jpg',
    story: 'Transformed his suburban backyard into a thriving market garden that now supports his family.',
    firstSteps: [
      'Built raised beds',
      'Started composting',
      'Learned season extension',
      'Connected with local markets'
    ]
  },
  {
    name: 'Lisa Rodriguez',
    title: 'Community Garden Champion',
    avatar: '/images/lisa.jpg',
    story: 'Started a community garden that now feeds 50 families and hosts workshops for beginners.',
    firstSteps: [
      'Organized neighbors',
      'Secured vacant lot',
      'Applied for grants',
      'Built community partnerships'
    ]
  }
];

export default function SuccessStories() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Real People, Real Success
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          From complete beginners to thriving farmers
        </Typography>

        <Grid container spacing={4}>
          {stories.map((story, index) => (
            <Grid item xs={12} md={4} key={story.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={story.avatar}
                        sx={{ width: 80, height: 80, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {story.name}
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                          {story.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" paragraph>
                      {story.story}
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      First Steps Taken:
                    </Typography>
                    <List dense>
                      {story.firstSteps.map((step, stepIndex) => (
                        <ListItem key={stepIndex}>
                          <ListItemIcon>
                            <ArrowRight color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={step} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Your Success Story Starts Here
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Every farmer started as a beginner. Take your first step today.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
