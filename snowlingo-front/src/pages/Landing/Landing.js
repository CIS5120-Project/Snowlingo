import "./Landing.css"
import React from "react";
import { Container, Divider, Link } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import snow from './snowlingo.svg';
import PhoneIcon from '@mui/icons-material/Phone';

function Landing (){
  return (
    <div>
      <main> Landing </main>
      <div className="logo">
      <img height={100} width={400} src={snow} alt="logo" />
      </div>
      <p class="advanture">Great Advanture!</p>
      
      <div> 
        <p class='login'>Login {'>>>'}</p>
        <div class='account-sign'>
            <p style={{marginTop:'0px'}}>Don't have account?  </p>
            <p class='signup'> SignUp here</p>
        </div>
      </div>
      <div style={{ marginTop: '400px', marginBottom: '100px' }}>
        <PhoneIcon>Contact us!</PhoneIcon>
        <p>Contact us!</p>
      </div>

      <footer>
        <p>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
