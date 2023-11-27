// Book.js

import React from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, Button, TextField } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import './Book.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Book = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeIn} className="book-container">
      <Typography variant="h3"  marginTop="20px" align="center" gutterBottom>
        Book Your Consultation
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Choose a slot to talk to our team. You’ll get a product demo that’s tailored to your business, tips on how to boost productivity and collaboration with MeisterTask and a custom pricing plan for your team.
      </Typography>

      <Grid
        container
        spacing={2}
        className="booking-section"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        marginTop="30px"
        style={{ backgroundImage: 'url("https://semmtech.com/wp-content/uploads/2022/10/AdobeStock_261517388-1-e1665560708616.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="curved-paper">
            {/* Date Picker and Time Slots Component */}
            <div className="date-time-container">
              <div className="date-picker-container">
                {/* Date Picker Component */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Select a Date"
                    renderInput={(params) => <TextField {...params} />}
                    // Add any necessary props or customization based on your design
                    sx={{ width: '100%', borderRadius: '8px 8px 0 0', marginBottom: '1px' }} // Styling for DatePicker
                  />
                </LocalizationProvider>
              </div>

              <div className="time-slots-container">
                {/* Time Slots Component */}
                <Typography variant="h6" gutterBottom>
                  Time Slots
                </Typography>
                <List>
                  <ListItem button>
                    <ListItemText primary="2:30 PM" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="3:00 PM" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="3:30 PM" />
                  </ListItem>
                  {/* Add more time slots as needed */}
                </List>
              </div>
            </div>
          </Paper>
        </Grid>

        {/* Additional Content */}
      </Grid>
        <Typography variant="body1" align="center" gutterBottom>
          Select a date using the date picker, then choose a time slot for your consultation.
        </Typography>
        <Button component={Link} to="/getstarted" variant="contained"  color="primary" size="small" className="get-started-button" sx={{ display: 'block', margin: 'auto' }}>
          Get Started
        </Button>
    </animated.div>
  );
};

export default Book;
