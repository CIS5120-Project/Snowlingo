import "./Landing.css"
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Divider, Link, IconButton } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import snow from './snowlingo.svg';
import icemount from './icemount.svg';
import PhoneIcon from '@mui/icons-material/Phone';

function Landing (){
  let navigate = useNavigate();
  const goToLogin =() => {
    navigate('/Login');
  }
  const goToPersoninfo =() => {
    navigate('/skiinfo');
  }

  const handleLoginClick = (event) => {

  }

  return (
    <div className="background-mountain landing">
      <main>Landing</main>
      <div className="logo">
        <img height={100} width={400} src={snow} alt="logo"/>
      </div>
      <p className="advanture">Great Advanture!</p>

      <div>
        <IconButton className='login' onClick={goToLogin}>Login {'>>>'}</IconButton>
        <div className='account-sign'>
            <p style={{marginTop:'0px'}}>Don't have account?  </p>
            <p className='signup' onClick={goToPersoninfo}> SignUp here</p>
        </div>
      </div>

      <div style={{ "margin": "100px 1rem", "display": 'flex'}}>
        <PhoneIcon style={{color: 'white'}}></PhoneIcon>
        <p className='contact'>Contact us!</p>
      </div>
    </div>
  );
};

export default Landing;
