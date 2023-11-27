// import React from 'react';
// import {Paper,Grid,Typography,TextField,Avatar,Button,Checkbox,FormControlLabel,Link,ThemeProvider,createTheme} from '@mui/material';
// import LockRoundedIcon from '@mui/icons-material/LockRounded';
// import backgroundImage from '../images/1.jpeg';
// const Login =() => {
//     const paperstyle={padding:40,width:300,height:"60vh",
//     margin:"50px auto",borderRadius:15,
    
   
//     };
    
    
//     const avatarcolor={background:"#136DA1"};
//     const bstyle={margin:"10px auto"};

//     const theme = createTheme({
//         palette:{
//             primary:{
//                 main:'#136DA1',
//             },
//         },
//     });
//     return (
// <ThemeProvider theme={theme}>
            
//         <Grid>
//             <Paper elevation={5} style={paperstyle}>
            
//                 <Grid align="center">
//                  <Avatar style={avatarcolor}><LockRoundedIcon/></Avatar>
//                 <Typography variant="h5">SIGN IN</Typography>
//                 </Grid>
//                  <TextField margin="normal" label="Username/Email" fullWidth></TextField>
//                  <TextField  label="Password" type="password" required margin="normal" fullWidth ></TextField>
//                  <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button type="submit" color="primary" variant="contained" style={bstyle} fullWidth>Sign in  </Button>
//                 <Typography>
//                     <Link href="#">Forgot password ?</Link>
//                 </Typography><br></br>
//                 <Typography>
//                     <Link href="#">Sign up</Link>
//                 </Typography>
               
//             </Paper>
//         </Grid>
//         </ThemeProvider>
//     );
// }
// export default Login;
// Login.js
// import React from 'react';
// import { Paper, Grid, Typography, TextField, Avatar, Button, Checkbox, FormControlLabel, Link, Container, ThemeProvider, createTheme } from '@mui/material';
// import LockRoundedIcon from '@mui/icons-material/LockRounded';
// import backgroundImage from '../images/1.jpeg';

// const Login = () => {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
   
//   };

//   const paperStyle = {
//     width: '80%',
//     padding: 30,
//     borderRadius: 15,
//   };

//   const avatarColor = { background: "black" };
//   const bstyle = { margin: "10px auto" };

//   const imageContainerStyle = {
//     width: '100%', // Adjust the width as needed
//     height: '100%',
//     borderTopRightRadius: 15,
//     borderBottomRightRadius: 15,
//   };

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#40474B',
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Container style={containerStyle}>
//         <Paper elevation={10} style={paperStyle}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} sm={6}>
//               <Grid align="center">
//                 <Avatar style={avatarColor}><LockRoundedIcon /></Avatar>
//                 <Typography variant="h5">SIGN IN</Typography>
//               </Grid>
//               <TextField margin="normal" label="Username/Email" fullWidth />
//               <TextField label="Password" type="password" required margin="normal" fullWidth />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button type="submit" color="primary" variant="contained" style={bstyle} fullWidth>
//                 Sign in
//               </Button>
//               <Typography>
//                 <Link href="#">Forgot password?</Link>
//               </Typography><br></br>
//               <Typography>
//                 <Link href="#">Sign up</Link>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <div style={imageContainerStyle}>
//                 <img src={backgroundImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 15, borderBottomRightRadius: 15 }} />
//               </div>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Login;
// Login.js

import React, { useState } from 'react';
import { Paper, Grid, Typography, TextField, Avatar, Button, Checkbox, FormControlLabel, Link, Container, ThemeProvider, createTheme } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import backgroundImage from '../images/1.jpeg';
import axios from 'axios' // Import Axios

const Login = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const paperStyle = {
    width: '80%',
    padding: 30,
    borderRadius: 15,
  };

  const avatarColor = { background: 'black' };
  const bstyle = { margin: '10px auto' };

  const imageContainerStyle = {
    width: '100%', // Adjust the width as needed
    height: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  };

  const theme = createTheme({  
    palette: {
      primary: {
        main: '#40474B',
      },
    },
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin function is called');
  
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username: username,
        password: password,
      });
  
      console.log('Response:', response);
  
      // Check if 'data' property exists in the response object
      if (response && response.data) {
        console.log('Login successful!', response.data);
        // Handle the success, e.g., set user authentication state or redirect
      } else {
        console.error('Invalid response format:', response);
        // Handle unexpected response format
      }
    } catch (error) {
      console.log('Error:', error);
  
      // Check if 'response' property exists in the error object
      if (error.response) {
        console.error('Login failed:', error.response.data);
        // Handle errors, e.g., show an error message to the user
      } else {
        console.error('Error without response:', error);
        // Handle unexpected errors without a response
      }
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container style={containerStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Grid align="center">
                <Avatar style={avatarColor}><LockRoundedIcon /></Avatar>
                <Typography variant="h5">SIGN IN</Typography>
              </Grid>
              <form onSubmit={handleLogin}>
                <TextField
                  margin="normal"
                  label="Username/Email"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  required
                  margin="normal"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={bstyle}
                  fullWidth
                >
                  Sign in
                </Button>
              </form>
              <Typography>
                <Link href="#">Forgot password?</Link>
              </Typography>
              <br />
              <Typography>
                <Link href="#">Sign up</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={imageContainerStyle}>
                <img
                  src={backgroundImage}
                  alt="Background"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;





