import React, { useState, useRef, useEffect} from "react";

import { Typography, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const images = [
  'https://snowlingo-images.s3.amazonaws.com/felipe-giacometti-FN4cCdslXuE-unsplash.jpg',
  'https://snowlingo-images.s3.amazonaws.com/kira-laktionov-n9lNQ3O98k8-unsplash.jpg',
];

function Sections () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) {
        return;
      }

      const sectionTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const sectionHeight = sectionRef.current.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight - windowHeight) {
        // Calculate the scrollTop for the scroll-container
        const scrollOffset = scrollPosition - sectionTop;
        scrollContainerRef.current.scrollTop = scrollOffset;
      }
    };

    // Listen to the window scroll event
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const scrollPercentage = scrollContainerRef.current.scrollTop / maxScroll;
      const newIndex = Math.floor(scrollPercentage * images.length);
      if (newIndex !== currentIndex && newIndex < images.length) {
        setCurrentIndex(newIndex);
      }
    };

    scrollContainerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      // Here you can set it to scroll by a certain height or to a certain element
      const newScrollPosition = scrollContainerRef.current.scrollTop + window.innerHeight; // Scrolls down by 300px
      scrollContainerRef.current.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 w-screen flex px-56" ref={sectionRef}>
      <section className="overflow-y-scroll h-screen hiddenScroll" ref={scrollContainerRef} tabIndex="-1" style={{ flex: "0 0 500px", outline: 'none' }}>
        <div className="flex flex-col h-screen align-middle justify-center">
          <Typography
            variant="subtitle1"
            component="div"
            sx={{"fontWeight": "bold", "color": "#836FFF"}}
          >
            Match your pace and enhance your skills
          </Typography>
          <Typography variant="h3" component="h3" sx={{"fontWeight": "bold", "color": "#211951"}}>
            Tailored Learning Experience
          </Typography>
          <Typography variant="body" component="p" sx={{"color": "#211951", "margin": "1.5rem 0"}}>
            Jump right into learning with courses specifically designed for your skill level. Each lesson is concise and structured to be easily digestible, gradually building upon previously mastered skills. Our adaptive learning paths ensure you evolve your abilities at a pace that feels right for you, making every session both productive and satisfying.
          </Typography>
          <Button
            variant="outlined"
            onClick={scrollToNext}
            style={{color: "#211951", borderColor: "#211951"}}
          >
            Next <NavigateNextIcon className="bounceX"/>
          </Button>
        </div>
        <div className="flex flex-col h-screen align-middle justify-center">
          <Typography
            variant="subtitle1"
            component="div"
            sx={{"fontWeight": "bold", "color": "#836FFF"}}
          >
            Learn, Play, and Master
          </Typography>
          <Typography variant="h3" component="h3" sx={{"fontWeight": "bold", "color": "#211951"}}>
            Interactive, Fun Quizzes
          </Typography>
          <Typography variant="body" component="p" sx={{"color": "#211951", "marginTop": "1.5rem"}}>
            Test your knowledge with our dynamic quizzes designed to reinforce your learning in a fun and engaging manner. Each quiz acts as a mini-game, making learning addictive and exciting. Challenge yourself, track your improvements, and solidify your snowboarding and skiing skills with every question you conquer.
          </Typography>
        </div>
      </section>
      <div className="flex my-40 ml-20 align-middle bg-slate-50 image-container" style={{"flex": "1 1 auto"}}>
        <img
          src={images[currentIndex]}
          alt="Display"
          onLoad={handleImageLoad}
          className={loaded ? 'visible' : 'hidden'}
          style={{"objectFit": "cover", maxWidth: '100%'}}
        />
      </div>
    </div>
  )
}

export default Sections;
