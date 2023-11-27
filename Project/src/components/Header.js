// import React from 'react';
// import {AppBar,Toolbar,Tabs,Tab,Button,useMediaQuery,useTheme,Typography} from "@mui/material";
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import {useState} from 'react';
// import DrawerComp from './DrawerComp';
// import { Link } from 'react-router-dom';
// const PAGES=["Products","Enterprise","Services","Pricing","Aboutus","Contactus"];
// const Header =()=> {
//     const[value,setValue]=useState();
//     const theme=useTheme();
//     console.log(theme);
//     const isMatch=useMediaQuery(theme.breakpoints.down('md'))
//     return (
//         <React.Fragment>
//             <AppBar sx={{background:"black"}}>
//                 <Toolbar>
//                     < Diversity3Icon/>
//                     {
//                         isMatch ? (
//                            <>
//                            <Typography sx={{fontSize:'1.5rem',paddingLeft:'10%'}}>
//                             Project
//                            </Typography>
//                            <DrawerComp/>
//                            </>
//                         ) : (
//                          <>
//                          <Tabs sx={{margin:"auto"}} textColor="white" value={value} onChange={(e,value)=>setValue(value)} 
//                     indicatorColor="primary">
//                         {
//                             PAGES.map((page,index)=>(
//                                 <Tab key={index} label={page}/>
       
//                             ))
//                         }
//                       {/* <Tab label="About Us"/>
//                       <Tab label="Conatct Us"/> */}
//                     </Tabs>
//                     <Button component={Link}  to={"/Login"} sx={{margiLeft:"auto"}}variant="contained">Login{" "}</Button>
//                     <Button component={Link}  to={"/Regiter"}sx={{marginLeft:"10px"}} variant="contained">SignUp{" "}</Button>
//                          </>   
//                         )
//                     }
                    
//                 </Toolbar>
               

//             </AppBar>
//         </React.Fragment>
//     )
// }
// export default Header;
// import React from 'react';
// import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import { useState } from 'react';
// import DrawerComp from './DrawerComp';
// import { Link } from 'react-router-dom';

// const PAGES = ["Products", "Enterprise", "Services", "Pricing", "Aboutus", "Contactus"];

// const Header = () => {
//   const [value, setValue] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "black" }}>
//         <Toolbar>
//           <Diversity3Icon />
//           {isMobile ? (
//             <>
//               <Typography sx={{ fontSize: '1.5rem', paddingLeft: '10%' }}>
//                 Project
//               </Typography>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ margin: "auto" }}
//                 textColor="white"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//                 indicatorColor="primary"
//               >
//                 {PAGES.map((page, index) => (
//                   <Tab key={index} label={page} component={Link} to={`/${page.toLowerCase()}`} />
//                 ))}
//               </Tabs>
//               <Button component={Link} to={"/Login"} sx={{ marginLeft: "auto" }} variant="contained">
//                 Login{" "}
//               </Button>
//               <Button component={Link} to={"/Register"} sx={{ marginLeft: "10px" }} variant="contained">
//                 SignUp{" "}
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;
// Header.js
import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useState } from 'react';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';

const PAGES = ["Products", "Enterprise", "Services", "Pricing", "Aboutus", "Contactus"];

const Header = () => {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <Diversity3Icon />
          {isMobile ? (
            <>
              <Typography sx={{ fontSize: '1.5rem', paddingLeft: '10%' }}>
                Project
              </Typography>
               <DrawerComp /> 
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: "auto" }}
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                 {PAGES.map((page, index) => (
                  <Tab key={index} label={page} component={Link} to={`/${page.toLowerCase()}`} />
                ))
                } 
                
                <Button component={Link} to={"/Contact"} sx={{ marginLeft: "auto" }} >
                Contactus{" "}
              </Button>
                <Button component={Link} to={"/Enterprise"} sx={{ marginLeft: "auto" }} >
                Enterprise{" "}
              </Button>
            
                <Button component={Link} to={"/Pricing"} sx={{ marginLeft: "auto" }} >
                Pricing{" "}
              </Button>
              
              </Tabs>
              <Button component={Link} to={"/Login"} sx={{ marginLeft: "auto" }} variant="contained">
                Login{" "}
              </Button>
              <Button component={Link} to={"/Register"} sx={{ marginLeft: "10px" }} variant="contained">
                SignUp{" "}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;



