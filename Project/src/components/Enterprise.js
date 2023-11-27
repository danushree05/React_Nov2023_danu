import React from 'react';
import { Typography, Grid ,Box,Container,FormControl,TextField,Button, InputLabel, Select, MenuItem, List, ListItem, ListItemText,ListItemIcon } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const imageSectionStyle = {
  background: 'linear-gradient(to bottom,#424242,#757575 )', // Gradient color
  padding: '140px 0',
  textAlign: 'center',
  color: 'white', // Text color
};

const imageSectionStyle1 = {
  background: 'white', // Gradient color
  padding: '140px 0',
  textAlign: 'center',
  color: 'black', // Text color
};
const buttonStyle = {
  marginTop: '20px',
  background: 'black',
  color: 'white',
  '&:hover': {
    background: '#333',
  },
};

const imageStyle = {
  maxWidth: '80%',
  borderRadius: '10px',
};
const imageStyle1 = {
  maxWidth: '100%',
  borderRadius: '10px',
};

const contentSectionStyle = {
  background: '', // Matching gradient color
  padding: '90px 0',
  textAlign: 'center',
  color: 'black', // Text color
  marginTop:'-5px',
  
};

const contentItemStyle = {
  maxWidth: '300px',
  margin: '0 auto',
};
const gallerySectionStyle = {
    background: 'linear-gradient(to bottom,#757575, #424242)', // Gradient color
    padding: '70px',
    textAlign: 'center',
    color: 'white', // Text color
  };

  const galleryBoxStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
  };
  

const Enterprise = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });
  return (
    
    <>
    
      {/* Image Section */}
      <Container  maxWidth="100%"/>
      <animated.div style={fadeIn}>
      <Grid container spacing={1} sx={imageSectionStyle} marginTop={0}>
        <Grid item xs={12} md={6}>
          <img
            src="https://assets.asana.biz/transform/fb5c26e6-042d-4567-a636-7ebe9d40dca9/ENTQ424-web-enterprise-hero-rounded-2x-en-US?io=transform:fill,width:1440&format=webp"
            alt="SmallImage"
            style={imageStyle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            <h2>Unify teams, tools, and work with Asana for enterprises</h2>
          </Typography>
          <Typography variant="body1" paragraph>
            <h3>Coordinate work across departments by connecting strategy, planning, and execution in a single platform.</h3>
          </Typography>
        </Grid>
      </Grid>

      {/* Additional Content Section */}
      <Grid container spacing={5} sx={contentSectionStyle} marginTop={5}>
        {/* Content Item 1 */}
        <Grid item xs={12} md={4} style={contentItemStyle}>
          <Typography variant="h5" gutterBottom>
            PRIVATE & SECURE
          </Typography>
          <Typography variant="body1" paragraph>
            100k+ of the world's most innovative enterprises trust Asana to keep their data safe
          </Typography>
        </Grid>

        {/* Content Item 2 */}
        <Grid item xs={12} md={4} style={contentItemStyle}>
          <Typography variant="h5" gutterBottom>
            SCALABLE & FLEXIBLE
          </Typography>
          <Typography variant="body1" paragraph>
            200k+ of your teammates can be onboarded in a single deployment
          </Typography>
        </Grid>

        {/* Content Item 3 */}
        <Grid item xs={12} md={4} style={contentItemStyle}>
          <Typography variant="h5" gutterBottom>
            EASY TO ADOPT
          </Typography>
          <Typography variant="body1" paragraph>
            85% customer satisfaction score for enterprise, with a 53 NPS score
          </Typography>
        </Grid>
      </Grid>

      <Box sx={gallerySectionStyle}>
        <Container>
          <Typography variant="h2" >The right tools can double your teams’ velocity—and triple their output</Typography><br></br>
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://assets.asana.biz/transform/56b87db9-c186-4b5c-807d-0f8fa93f375d/ENTQ424-web-enterprise-content-1-2x-en-US?io=transform:fill,width:960&format=webp" alt="GalleryImage1" style={imageStyle1} />
                <Typography variant="body2" color="inherit">
                 <h1>Build powerful workflows with ease</h1>
                 <p>
                 Create more efficient workflows by using a visual tool that connects teams, automates processes, organizes work, and streamlines projects in one place.
                 </p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://assets.asana.biz/transform/28eaefb6-2868-4395-8faa-123e67d347fa/ENTQ424-web-enterprise-content-2-2x-en-US?io=transform:fill,width:960&format=webp" alt="GalleryImage2" style={imageStyle1} />
                <Typography variant="body2" color="inherit">
                  <h1>Connect all your work to goals</h1>
                  <p>Set and track company-wide goals that instantly update as teams make progress. This way, you can spot blockers in real time and everyone can see how their work ladders up to company objectives.</p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://assets.asana.biz/transform/bb8c607d-7f24-4428-80f4-2c451c4c3a8a/ENTQ424-web-enterprise-content-3-2x-en-US?io=transform:fill,width:960&format=webp" alt="GalleryImage3" style={imageStyle1} />
                <Typography variant="body2" color="inherit">
                <h1>Manage any organization, no matter how large</h1>
                  <p>Confidently deploy and manage Asana across all your teams with enterprise-grade security and admin controls. Manage permissions, protect your data, and more—without unnecessary manual work.</p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid container spacing={1} sx={imageSectionStyle1} marginTop={0} >
        <Grid item xs={12} md={6}>
          <img
            src="https://assets.asana.biz/transform/fbaedae4-ecc2-4b9e-b248-7fd501a9a85a/ENTQ424-web-enterprise-AI-2x-en-US?io=transform:fill,width:960&format=webp"
            alt="SmallImage"
            style={imageStyle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            <h2>Amplify your impact with AI</h2>
          </Typography>
          <Typography variant="body1" paragraph>
            <h3>Work smarter and faster with Asana Intelligence on your team. Unlock a suite of AI features that maximizes efficiency at every level—and constantly optimize over time to support your evolving needs.</h3>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{background:'#d4d4d4'}} sx={{ padding: '30px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '-5px' }}>
        
          <Grid container spacing={5}>
            {/* Left Side: Contact our Sales Team */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
              Unlock a smarter way to work with Enterprise
              </Typography>
              <Typography variant="h4" gutterBottom>
              Chat with a specialist to see how Asana can help you streamline work across departments, without limits.
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
                  <InputLabel id="users-label">Country</InputLabel>
                  <Select labelId="users-label" label="Country">
                    <MenuItem value={1}>India</MenuItem>
                    <MenuItem value={1}>Afghanistan</MenuItem>
                    <MenuItem value={2}>Sri Lanka</MenuItem>
                    <MenuItem value={3}>England</MenuItem>
                    <MenuItem value={4}>America</MenuItem>
                    <MenuItem value={4}>New Zealand</MenuItem>
                    <MenuItem value={4}>Canada</MenuItem>
                  </Select>
                </FormControl>
                <TextField label="How can our team help you?" multiline fullWidth margin="normal" rows={4} variant="outlined" />
                <Button variant="contained" color="primary" fullWidth sx={buttonStyle}>
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
       
      </Grid>
      </animated.div>
      <Container/>
    </>
  );
};

export default Enterprise;
