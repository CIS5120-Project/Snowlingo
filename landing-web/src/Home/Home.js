import React from "react";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Typography, Button } from '@mui/material';

import Navbar from '../Components/Navbar'
import Sections from './Sections'
import DesignProcess from './DesignProcess'

function Home (){
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
  });
  }

  return (
    <div className="w-screen">
      <div className="bg-indigo-50 pb-20">
        <Navbar />
        <div className="flex justify-center px-48 my-10">
          <img
            src="https://snowlingo-images.s3.amazonaws.com/felipe-giacometti-FN4cCdslXuE-unsplash.jpg"
            alt="snowboard"
            className="w-2/5 mx-5"
            style={{"objectFit": "cover"}}
          ></img>
          <div className="mx-10 my-14">
            <Typography variant="h1" component="h1" sx={{"fontWeight": "bold", "color": "#211951"}}>
              <span className="gradient-text">Snowlingo</span>: Slide with Confidence Today!
            </Typography>
            <Typography variant="h6" component="div" sx={{ "color": "#211951", "marginTop": "1.5rem" }}>
              Slide with confidence with Snowlingo. Your Personal Coach for Skiing and Snowboarding
            </Typography>
            <div className="w-full mt-10 flex justify-start">
              <Button
                className="w-48 h-16"
                variant="contained"
                style={{"backgroundColor": "#15F5BA", "color": "#211951", "fontWeight": "bold"}}
              >Check Designs</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center" style={{"marginTop": "-3rem"}}>
          <KeyboardDoubleArrowDownIcon className="animate-bounce cursor-pointer" fontSize="large" onClick={handleScroll}/>
        </div>
      </div>
      <section className="bg-slate-50 w-sreen">
        <div className="flex justify-center flex-col w-screen align-middle">
          <Typography variant="h6" component="h6" sx={{"fontWeight": "bold", "color": "#15F5BA", "textAlign": "center", "backgroundColor": "#211951"}}>
          </Typography>
          <div className="flex h-10 font-bold gap-1" style={{"backgroundColor": "#211951"}}>
            <Typography variant="h6" component="h6" className="text-right flex-1" sx={{"fontWeight": "bold", "color": "#FE76FF", "overflow": "hidden", "wordBreak": "break-all", "lineHeight": "2.5rem", "direction": "rtl"}}>
              <span style={{"whiteSpace": "nowrap", "direction": "ltr"}}>Your Adaptive, Engaging Path to Winter Sports Proficiency</span>
            </Typography>
            <Typography variant="h6" component="h6" className="self-center" sx={{"fontWeight": "bold", "color": "#15F5BA"}}>
              Your Adaptive, Engaging Path to Winter Sports Proficiency
            </Typography>
            <Typography variant="h6" component="h6" className="flex-1 align-middle" sx={{"fontWeight": "bold", "color": "#FE76FF", "overflow": "hidden", "wordBreak": "break-all", "lineHeight": "2.5rem"}}>
              Your Adaptive, Engaging Path to Winter Sports Proficiency
            </Typography>
          </div>
        </div>
        <div className="px-56 py-44 snowBg">
          <Typography variant="h3" component="h3" sx={{"fontWeight": "bold", "color": "#211951", "textAlign": "center", "margin": "10rem 0 3rem", "backgroundColor": "#F0F3FF"}}>
            Master the Mountains with Snowlingo
          </Typography>
          <Typography variant="h6" className="text-center" sx={{"marginBottom": "10rem", "color": "#F0F3FF"}}>
            Embark on a personalized learning journey with Snowlingo,
            designed to make mastering skiing and snowboarding as intuitive
            and enjoyable as speaking a new language with Duolingo. Whether you’re
            facing the slopes for the first time or are a seasoned enthusiast looking to hone your skills,
            Snowlingo provides a seamless, engaging interface that adapts to your individual learning style and pace.
          </Typography>
        </div>
      </section>
      <Sections />
      <DesignProcess />
    </div>
  );
};

export default Home;
