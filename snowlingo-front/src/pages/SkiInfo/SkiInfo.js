import React from "react";
import "./SkiInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Typography, Grid, useTheme } from '@mui/material';

function SkiInfo () {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        margin: '10% 10%'
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
      <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Age:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Height:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Weight:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              label="Living Area:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>
      </Stack>
      <Box
        sx={{
          marginTop: "10%",
          display: 'flex',
          justifyContent: "space-between"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FE76FF",
            fontSize: "4rem",
            marginTop: "20%",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline"
            }
          }}
          onClick = {() => {
            navigate("/home")
          }}
        >
          Submit {'>>>'}
        </Typography>
        <Box
          sx={{
            width: "20vw",
            height: "30vh",
            backgroundColor: theme.palette.primary.main,
            right: 0,
            position: "absolute"
          }}
        />
      </Box>
    </Box>
  );
};

export default SkiInfo;
