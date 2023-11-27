import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Typography, Container, Grid, Paper, Button, List, ListItem, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const buttonStyle = {
  marginTop: '20px',
  background: 'black',
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('small');

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, 
  });

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const bulletinContent = [
    'Manage tasks and personal to-dos',
    'Collaborate with up to 10 teammates',
    'Unlimited tasks',
    'Unlimited projects',
    'Unlimited messages',
    'Unlimited activity log',
    'Unlimited file storage (100MB per file)',
    'Unlimited assignee and due dates',
    'List view projects',
    'Board view projects',
    'Calendar view',
    'Basic search filters',
    'Status updates',
    'iOS and Android mobile apps',
    'Time tracking with integrations - See time tracking apps',
    '100+ free integrations with your favorite apps - Learn more',
  ];

  const bulletinContent1 = [
    'Collaborate with up to 500 teammates',
    'Timeline view',
    'Gantt view',
    'Unlimited projects',
    'Asana Intelligence',
    'Workflow Builder',
    'Project dashboards',
    'Advanced search',
    'List view projects',
    'Board view projects',
    'Calendar view',
    'Basic search filters',
    'Status updates',
    'iOS and Android mobile apps',
    'Time tracking with integrations - See time tracking apps',
    '100+ free integrations with your favorite apps - Learn more',
  ];

  return (
    <animated.div style={fadeIn}>
      <Container sx={{ marginTop: '70px' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Easily organize your work. Start free.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <Button
            variant={selectedPlan === 'small' ? 'contained' : 'outlined'}
            onClick={() => handlePlanChange('small')}
            sx={{ marginRight: '10px' }}
          >
            Small & Individual Teams
          </Button>
          <Button
            variant={selectedPlan === 'business' ? 'contained' : 'outlined'}
            onClick={() => handlePlanChange('business')}
          >
            Business & Enterprise
          </Button>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                textAlign: 'center',
                transition: 'opacity 0.5s',
                opacity: selectedPlan === 'small' ? 1 : 0,
                display: selectedPlan === 'small' ? 'block' : 'none',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Small & Individual Teams Pricing
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Basic
                    </Typography>
                    <Typography variant="h4">$10/month</Typography>
                    <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
                      Get Started
                    </Button>
                    <List>
                      {bulletinContent.map((item, index) => (
                        <ListItem key={index}>
                          <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Standard
                    </Typography>
                    <Typography variant="h4">$20/month</Typography>
                    <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
                      Get Started
                    </Button>
                    <List>
                      {bulletinContent1.map((item, index) => (
                        <ListItem key={index}>
                          <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Premium
                    </Typography>
                    <Typography variant="h4">$30/month</Typography>
                    <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
                      Get Started
                    </Button>
                    <List>
                      {bulletinContent.map((item, index) => (
                        <ListItem key={index}>
                          <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                textAlign: 'center',
                transition: 'opacity 0.5s',
                opacity: selectedPlan === 'business' ? 1 : 0,
                display: selectedPlan === 'business' ? 'block' : 'none',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Business & Enterprise Pricing
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Business
                    </Typography>
                    <Typography variant="h4">$50/month</Typography>
                    <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
                      Get Started
                    </Button>
                    <List>
                      {bulletinContent.map((item, index) => (
                        <ListItem key={index}>
                          <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                      Enterprise
                    </Typography>
                    <Typography variant="h4">$100/month</Typography>
                    <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
                      Get Started
                    </Button>
                    <List>
                      {bulletinContent.map((item, index) => (
                        <ListItem key={index}>
                          <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </animated.div>
  );
};

export default Pricing;
