// Hero.js
import React from 'react';
import { Typography, Button, Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url("https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2022/11/iStock-1325276224.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    textAlign: 'center',
    padding: '300px 0', // Adjust the padding to reduce the height
    
  };

  const buttonStyle = {
    marginTop: '20px',
    background:'white',
    color:'black', fontWeight: 'bold',
  };

  const boxStyle = {
    background: 'linear-gradient(to bottom, #000000, #333333)', // Gradient color
    padding: '70px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'white', // Text color
  };
  const imageSectionStyle = {
    background: 'linear-gradient(to bottom,#757575, #424242)', // Gradient color
    padding: '50px',
    textAlign: 'center',
    color: 'white', // Text color
  };
  const imageSectionStyle1 = {
    background: 'linear-gradient(to bottom, #424242,#757575)', // Gradient color
    padding: '50px',
    textAlign: 'center',
    color: 'white', // Text color
  };

  const imageStyle = {
    maxWidth: '80%',
    borderRadius: '10px',
  };
  const gallerySectionStyle = {
    background: 'linear-gradient(to bottom, #333333,#000000)', // Gradient color
    padding: '70px',
    
    textAlign: 'center',
    color: 'white', // Text color
  };

  const galleryBoxStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
  };

  return (
    <>
   
      <Box sx={heroStyle}>
        <Container>
          <Typography variant="h2" component="div" gutterBottom>
            {/* Welcome <br></br> to <br></br> project management system */}
          </Typography>
          <Typography variant="h5" component="div" paragraph>
            {/*Streamline your projects, collaborate effectively, and achieve success with our powerful tools.*/}
          </Typography>
          <Button component={Link} to="/getstarted" variant="contained" color="primary" size="large" sx={buttonStyle}>
            Get Started
          </Button>
          <br></br>
          <Button component={Link} to="/book" variant="contained" color="primary" size="large" sx={buttonStyle}>
            Book a demo
          </Button>
          
        </Container>
      </Box>
    
      

      <Grid container spacing={1} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img src="https://th.bing.com/th/id/OIG.ubx0hjzucDZcbt4dnRim?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
          <h2>Automate work and collaborate with a remote workforce</h2>
          </Typography>
          <Typography variant="body1" paragraph>
          
<h3>Spend less time on requests and repeat tasks. Save your team 120 hours a month with automations.</h3>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={imageSectionStyle1}>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
           <h2>Plan your projects consistently with templates</h2>
          </Typography>
          <Typography variant="body1" paragraph>
          <h3>Organize projects into manageable tasks, files, and forms. Define deadline, and visualize your team’s progress. Deliver on time, every time.</h3>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://greatnusa.com/wp-content/uploads/2022/10/intro-pm.jpg" alt="SmallImage" style={imageStyle} />
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={imageSectionStyle}>
        
       
        <Grid item xs={12} md={6}>
          <img src="https://assets-global.website-files.com/6360d3edc696260ba2aecbc7/64fefe938f02e85ef162fae4_Put%20your%20customer%20first%20-%20cx-p-800.webp" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
           <h2>Bring your people, clients and partners under one roof</h2>
          </Typography>
          <Typography variant="body1" paragraph>
          <h3></h3>
          </Typography>
        </Grid>
      </Grid>

      {/* New Section */}
     

      {/* New Section with Three Boxes */}
      <Box sx={gallerySectionStyle}>
        <Container>
          
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://th.bing.com/th/id/OIG.ukPL_DDKc6F3_XHO28D4?pid=ImgGn" alt="GalleryImage1" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                 <h1>Organize Goals</h1>
                 <p>
                  Our new service makes it easy for you to work anywhere,there are new features that will really help you.
                 </p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://th.bing.com/th/id/OIG.sgcxYkeA66H.Y9ghddzp?pid=ImgGn" alt="GalleryImage2" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                  <h1>Arrange Schedule</h1>
                  <p>Our new service makes it easy for you to work anywhere,there are new features that will really help you.</p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://th.bing.com/th/id/OIG.tU04QpFyFEEtdd3rH8BE?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h1>Work on lists easily</h1>
                  <p>Our new service makes it easy for you to work anywhere,there are new features that will really help you.</p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      
    </>
  );
};

export default Hero;
