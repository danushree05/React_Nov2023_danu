// // import React from 'react';
// import { Container, Grid, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { styled } from '@emotion/styled';

// const buttonStyle = {
//   marginTop: '20px',
//   background: 'black',
// };

// const AnimatedContainer = styled(Container)`
//   margin-top: 100px;
//   animation: fadeInUp 0.8s ease-in-out;

//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const AnimatedButton = styled(Button)`
//   background: black;
//   color: white;
//   transition: background 0.3s ease-in-out;

//   &:hover {
//     background: #333;
//   }
// `;

// const Contact = () => {
//   return (
//     <AnimatedContainer>
//       <Grid container spacing={10}>
//         {/* Left Side: Contact our Sales Team */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" gutterBottom>
//             Get in Touch
//           </Typography>
//           <Typography variant="h4" gutterBottom>
//             Contact our Sales Team
//           </Typography>
//           <Typography variant="subtitle1">
//             Get in Touch. Tell us how we can help you succeed. We will:
//           </Typography>
//           <List>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Help increase your productivity." />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Create a price and license plan best suited to your needs." />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Introduce MeisterTask and explain its value to your business." />
//             </ListItem>
//           </List>
//         </Grid>

//         {/* Right Side: Contact Form */}
//         <Grid item xs={12} md={6}>
//           <form>
//             <TextField
//               label="First Name"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//             />
//             {/* ... (Other form elements) */}
//             <AnimatedButton variant="contained" color="primary" fullWidth style={buttonStyle}>
//               Submit
//             </AnimatedButton>
//           </form>
//         </Grid>
//       </Grid>
//     </AnimatedContainer>
//   );
// };

// export default Contact;
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Grid, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText,ListItemIcon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import backgroundImage from '../images/4.jpg'; // Replace with the path to your image file

const buttonStyle = {
  marginTop: '20px',
  background: 'black',
  color: 'white',
  '&:hover': {
    background: '#333',
  },
};

const Contact = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <Grid container sx={{marginTop:'35px '}}>
      {/* Image Container */}
      
      {/* Contact Container */}
      <Grid item xs={12} sx={{ padding: '30px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <animated.div style={fadeIn}>
          <Grid container spacing={5}>
            {/* Left Side: Contact our Sales Team */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="h4" gutterBottom>
                Contact our Sales Team
              </Typography>
              <Typography variant="subtitle1">
                Get in Touch. Tell us how we can help you succeed. We will:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help increase your productivity." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create a price and license plan best suited to your needs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Introduce MeisterTask and explain its value to your business." />
                </ListItem>
              </List>
            </Grid>

            {/* Right Side: Contact Form */}
            <Grid item xs={12} md={6}>
              <form>
                <TextField label="First Name" fullWidth margin="normal" variant="outlined" />
                <TextField label="Last Name" fullWidth margin="normal" variant="outlined" />
                <TextField label="Work Email" fullWidth margin="normal" variant="outlined" />
                <TextField label="Phone Number" fullWidth margin="normal" variant="outlined" />
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="users-label">How many users?</InputLabel>
                  <Select labelId="users-label" label="How many users?">
                    <MenuItem value={1}>1-10</MenuItem>
                    <MenuItem value={2}>11-50</MenuItem>
                    <MenuItem value={3}>51-100</MenuItem>
                    <MenuItem value={4}>100+</MenuItem>
                  </Select>
                </FormControl>
                <TextField label="How can our team help you?" multiline fullWidth margin="normal" rows={4} variant="outlined" />
                <Button variant="contained" color="primary" fullWidth sx={buttonStyle}>
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </animated.div>
      </Grid>
    </Grid>
  );
};

export default Contact;
