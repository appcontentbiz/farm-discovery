import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  LinearProgress
} from '@mui/material';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: 'How much space do you have available?',
    options: [
      { value: 'windowsill', label: 'Just a windowsill' },
      { value: 'balcony', label: 'A balcony or small patio' },
      { value: 'backyard', label: 'A backyard' },
      { value: 'acreage', label: 'An acre or more' }
    ]
  },
  {
    id: 2,
    question: 'How much time can you dedicate daily?',
    options: [
      { value: 'minimal', label: '5-10 minutes' },
      { value: 'moderate', label: '30 minutes' },
      { value: 'significant', label: '1-2 hours' },
      { value: 'full-time', label: '4+ hours' }
    ]
  },
  {
    id: 3,
    question: 'What interests you most about farming?',
    options: [
      { value: 'food', label: 'Growing my own food' },
      { value: 'hobby', label: 'Having a relaxing hobby' },
      { value: 'business', label: 'Starting a business' },
      { value: 'community', label: 'Building community' }
    ]
  },
  {
    id: 4,
    question: 'What\'s your experience level with plants?',
    options: [
      { value: 'none', label: 'Complete beginner' },
      { value: 'houseplants', label: 'Good with houseplants' },
      { value: 'garden', label: 'Some gardening experience' },
      { value: 'experienced', label: 'Experienced gardener' }
    ]
  }
];

const recommendations = {
  'windowsill-minimal': {
    title: 'Herb Garden Enthusiast',
    description: 'Perfect for busy urban dwellers! Start with a simple herb garden in your window.',
    suggestions: [
      'Start with basil, mint, and chives',
      'Use self-watering containers',
      'Focus on kitchen herbs you use often'
    ]
  },
  'balcony-moderate': {
    title: 'Urban Container Gardener',
    description: 'Make the most of your balcony with a productive container garden!',
    suggestions: [
      'Use vertical growing systems',
      'Focus on compact vegetables',
      'Install a simple irrigation system'
    ]
  },
  'backyard-significant': {
    title: 'Market Garden Potential',
    description: 'Your space and time commitment could lead to a productive market garden!',
    suggestions: [
      'Start with raised beds',
      'Plan crop rotations',
      'Consider local market opportunities'
    ]
  }
  // Add more recommendation combinations
};

export default function FarmingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const space = answers[0];
    const time = answers[1];
    const key = space + '-' + time;
    return recommendations[key] || recommendations['windowsill-minimal'];
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendation = getRecommendation();
    return (
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom color="primary">
                Your Perfect Farming Match!
              </Typography>
              <Typography variant="h5" gutterBottom>
                {recommendation.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {recommendation.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Next Steps:
              </Typography>
              <Box component="ul">
                {recommendation.suggestions.map((suggestion, index) => (
                  <Typography component="li" key={index}>
                    {suggestion}
                  </Typography>
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                sx={{ mt: 3 }}
              >
                Take Quiz Again
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Discover Your Farming Style
        </Typography>
        <Typography variant="body1" paragraph textAlign="center" color="text.secondary">
          Answer a few questions to find your perfect farming match
        </Typography>

        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ mb: 4, height: 10, borderRadius: 5 }}
        />

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {questions[currentQuestion].question}
              </Typography>
              <RadioGroup
                value={answers[currentQuestion] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
              >
                {questions[currentQuestion].options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                sx={{ mt: 3 }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Container>
  );
}
