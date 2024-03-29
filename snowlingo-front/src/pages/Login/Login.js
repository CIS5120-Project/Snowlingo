import "./login.css"
import React from "react";
import snow from './snowlingo.svg';
import { Link } from 'react-router-dom';
import { Divider, IconButton } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';



function Login (){

  return (
    <div>
      <main> Login </main>
      <Link to="/landing">
        <img id="login-snow" src={snow} alt="logo"></img>
      </Link>

      <div className="login-typein">
        <PersonOutlineRoundedIcon />
      </div>
      






      <footer>
        <p style={{color: 'white'}}>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
