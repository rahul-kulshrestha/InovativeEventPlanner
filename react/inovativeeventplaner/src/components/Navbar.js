import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // Navigate to the "about" page

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    
    <Box
        sx={{
          // width: 100,
          // height: 100,
          borderRadius: 1,
          borderBottom: 1, 
          borderColor: 'divider',
          variant:"scrollable",
          scrollButtons:"auto",
          bgcolor: 'mute.main',
          '&:hover': {
            bgcolor: 'mute.dark',
          },
          
        }}
      >
    <Tabs value={value} onChange={handleChange} centered >
    <Link to="/login"><Tab label="Home" /></Link>
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
      <Tab label="Profile" />
      <Tab label="Bookings" />
      <Tab label="Settings" />
    </Tabs>
  </Box>
  </>
  );
};

export default Navbar;

