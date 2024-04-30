import { Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import ProgressBar from './ProgressBar';

function DesignProcess () {
  const navigate = useNavigate();

  return (
    <div className="w-screen my-20 relative">
      <div className="absolute top-5 left-44 w-1/3 z-10">
        <Typography variant="h2" component="h2" sx={{ fontWeight: "bold", color: "#211951", marginBottom: '1rem' }}>
          Design Process
        </Typography>
        <Typography variant="subtitel1" component="div" sx={{ marginBottom: '1rem'}}>
          A design process involves multiple phases that help in systematically dissecting a problem, identifying requirements, and generating solutions that can be prototyped, tested, and implemented.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#FE76FF",
            color:"#211951",
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: "#211951",
              color: "#F0F3FF",
            }
          }}
          onClick={() => { navigate('/reflection') }}
        >
          Discover More
        </Button>
      </div>
      <ProgressBar />
    </div>
  );
};

export default DesignProcess;
