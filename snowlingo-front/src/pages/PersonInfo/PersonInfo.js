import React from "react";
import "./PersonInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

function PersonInfo () {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        margin: "10% 10%",
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // gap: 2,
        // margin: '3rem 1.5rem'
      }}>
      <img src={logo} alt="logo img" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}/>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.primary.light
        }}
      >
        About you
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
        <Typography
          variant="body3"
          gutterBottom
          sx={{
            color: theme.palette.primary.light
          }}
        >
          You want to learn ...
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => navigate("/maintenance")}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Snowboard
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => navigate("/maintenance")}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Ski
            </Typography>
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
        <Typography
          variant="body3"
          gutterBottom
          sx={{
            color: theme.palette.primary.light
          }}
        >
          I am ...
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => navigate("/maintenance")}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Beginner
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => navigate("/maintenance")}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Intermediate
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => navigate("/maintenance")}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Advanced
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PersonInfo;
