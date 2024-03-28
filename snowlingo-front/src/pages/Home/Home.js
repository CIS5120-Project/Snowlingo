import React from "react";
import { Container, Divider, Link } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import snow from './snowlingo.svg';

function Home (){
  return (
    <div>
      <main> Home </main>
      <img height={170} width={400} src={snow} alt="logo"></img>
      <p>Great Advanture!</p>
      
      <p>Contact us!</p>
      <footer>
        <p>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
