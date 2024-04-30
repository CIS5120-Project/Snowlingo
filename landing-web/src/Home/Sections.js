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
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollPosition = scrollContainerRef.current.scrollTop;
      const sectionHeight = window.innerHeight; // Assuming each section is at least the height of the viewport
      const newIndex = Math.floor(scrollPosition / sectionHeight);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setLoaded(false);  // Reset image load state for new index
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const newScrollPosition = (currentIndex + 1) * window.innerHeight; // Scrolls to the next section
      scrollContainerRef.current.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 w-screen h-screen flex px-56" ref={sectionRef}>
      <section className="overflow-y-scroll h-full hiddenScroll" ref={scrollContainerRef} tabIndex="-1" style={{ flex: "0 0 550px" }}>
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
          <Typography variant="body" component="p" sx={{"color": "#211951", "margin": "1.5rem 0"}}>
            Test your knowledge with our dynamic quizzes designed to reinforce your learning in a fun and engaging manner. Each quiz acts as a mini-game, making learning addictive and exciting. Challenge yourself, track your improvements, and solidify your snowboarding and skiing skills with every question you conquer.
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
            Train Online, Triumph On-Site
          </Typography>
          <Typography variant="h3" component="h3" sx={{"fontWeight": "bold", "color": "#211951"}}>
            Virtual and Real-World Integration
          </Typography>
          <Typography variant="body" component="p" sx={{"color": "#211951", "margin": "1.5rem 0"}}>
            Snowlingo isn’t just about virtual learning; it’s your gateway to real-world experiences. Based on your progress and skills, get personalized recommendations for ski resorts where you can practice and perfect your maneuvers. From beginner slopes to challenging trails, find the best spots that match your growing prowess.
          </Typography>
          <Button
            variant="outlined"
            onClick={scrollToNext}
            style={{color: "#211951", borderColor: "#211951"}}
          >
            Next <NavigateNextIcon className="bounceX"/>
          </Button>
        </div>
      </section>
      <div className="flex flex-col justify-center my-32 ml-20 align-middle bg-slate-50 image-container" style={{"flex": "1 1 auto"}}>
        <img
          src={images[currentIndex]}
          alt="Display"
          onLoad={handleImageLoad}
          className={loaded ? 'visible' : 'hidden'}
          style={{"objectFit": "cover", width: '100%', height: '80%'}}
        />
      </div>
    </div>
  )
}

export default Sections;
