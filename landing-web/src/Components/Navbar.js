import React from "react";
import { useNavigate } from 'react-router-dom';

import { Toolbar, Typography, Link } from '@mui/material';

import logo from "../snowlingo.svg"

function Navbar (){
  const navigate = useNavigate();

  return (
    <div className="bg-transparent mx-24">
      <Toolbar>
        <img src={logo} alt="logo img" className="w-36"/>

        {/* Spacer to push icons to the right */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        {/* Home page  */}
        <Link
          underline="none"
          component="button"
          variant="h6"
          style={{
            "color": "#5145c6",
            "margin": "0 2rem"
          }}
          onClick={() => { navigate('/home') }}
        >
          <span className="hover:text-logoPink transition-colors duration-100">Home</span>
        </Link>

        {/* Design page */}
        <Link
          underline="none"
          component="button"
          variant="h6"
          style={{"color": "#5145c6", "margin": "0 2rem"}}
          onClick={() => { navigate('/reflection') }}
        >
          <span className="hover:text-logoPink transition-colors duration-100">Design Learnings</span>
        </Link>
      </Toolbar>
    </div>
  );
};

export default Navbar;
