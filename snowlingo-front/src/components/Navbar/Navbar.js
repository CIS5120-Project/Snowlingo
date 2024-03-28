import React from "react";
import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';

function Navbar (){
  const theme = useTheme();
  return (
    <AppBar position="static" style={{ width: '100%', padding: '0 1rem' }} sx={{ backgroundColor: theme.palette.primary.dark }}>
      <Toolbar>
        {/* Burger Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Spacer to push icons to the right */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        {/* Help Icon */}
        <IconButton
          color="inherit"
          aria-label="help"
        >
          <HelpIcon />
        </IconButton>

        {/* Home Icon */}
        <IconButton
          color="inherit"
          aria-label="home"
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
