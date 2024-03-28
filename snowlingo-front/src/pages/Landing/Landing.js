import "./Landing.css"
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Divider, Link, IconButton } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import snow from './snowlingo.svg';
import PhoneIcon from '@mui/icons-material/Phone';

function Landing (){
  let navigate = useNavigate();
  const goToLogin =() => {
    navigate('/Login');
  }
  const goToPersoninfo =() => {
    navigate('/Personalinfo');
  }

  const handleLoginClick = (event) => {
    
  }

  return (
    <div>
      <main> Landing </main>
      <div className="logo">
      <img height={100} width={400} src={snow} alt="logo" />
      </div>
      <p class="advanture">Great Advanture!</p>
      
      <div> 
        <IconButton class='login' onClick={goToLogin}>Login {'>>>'}</IconButton>
        <div class='account-sign'>
            <p style={{marginTop:'0px'}}>Don't have account?  </p>
            <p class='signup' onClick={goToPersoninfo}> SignUp here</p>
        </div>
      </div>
      <div style={{ marginTop: '400px', marginBottom: '100px', display: 'flex'}}>
        <PhoneIcon style={{color: 'white'}}></PhoneIcon>
        <p class='contact'>Contact us!</p>
      </div>

      <footer>
        <p style={{color: 'white'}}>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
