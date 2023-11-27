import React from 'react'
import {Drawer,List, ListItemIcon, ListItemButton,ListItemText,IconButton} from '@mui/material';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES=["Products","Use cases","Aboutus","Contactus","Login","Logout"];
const DrawerComp = () => {
  
    const [openDrawer,setOpenDrawer]=useState(false);
  return (
<React.Fragment>
<Drawer open={openDrawer}
onClose={()=>setOpenDrawer(false)}>
<List>
  {
    PAGES.map((page,index)=>(
      <ListItemButton onClick={()=>setOpenDrawer(false)}key={index}>
      <ListItemIcon>
          <ListItemText>
          {
            page
          } 
          </ListItemText>
      </ListItemIcon>

  </ListItemButton>
    ))
  }
   
</List>
</Drawer>
<IconButton sx={{color:'white',marginLeft:"auto"}}onClick={()=>setOpenDrawer(!openDrawer)} color='white'>
<MenuIcon/>
</IconButton>
</React.Fragment>
  );
};

export default DrawerComp;
