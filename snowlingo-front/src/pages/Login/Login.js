import "./login.css"
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import snow from './snowlingo.svg';
// import { Link } from 'react-router-dom';
import { Container, Divider, IconButton } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Box, Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




// function Login (){

//   return (
//     <div>
//       <main> Login </main>
//       <Link to="/landing">
//         <img id="login-snow" src={snow} alt="logo"></img>
//       </Link>

//       <div className="login-typein">
//         <PersonOutlineRoundedIcon />
//       </div>
      






//       <footer>
//         <p style={{color: 'white'}}>© 2024 Snowlingo. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };



// const Login=()=>{

//   const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//   const avatarStyle={backgroundColor:'#1bbd7e'}
//   const btnstyle={margin:'8px 0'}
//   return(
//       <Grid>
//           <Paper elevation={10} style={paperStyle}>
//               <Grid align='center'>
//                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//                   <h2>Sign In</h2>
//               </Grid>
//               <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
//               <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
//               <FormControlLabel
//                   control={
//                   <Checkbox
//                       name="checkedB"
//                       color="primary"
//                   />
//                   }
//                   label="Remember me"
//                />
//               <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//               <Typography >
//                    <Link href="#" >
//                       Forgot password ?
//               </Link>
//               </Typography>
//               <Typography > Do you have an account ?
//                    <Link href="#" >
//                       Sign Up 
//               </Link>
//               </Typography>
//           </Paper>
//       </Grid>
//   )
// }

const Login = () => {

  const log_username = "lucawu"
  const log_password = "1234567"
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  let navigate = useNavigate();
  const goToHome =() => {
    navigate('/home');
  }

  const authenticateUser = async (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === log_username && password === log_password){
          resolve(true);
        } else { resolve(false);}
      }, 1000);
    });
    if (username === log_username && password === log_password){
      return true
    } else { return false}
  };

  const handleClickLogin = async () => {
    try {
      const isAuthenticated =  await authenticateUser(username, password)
      if(isAuthenticated){
        setLoginMessage('Login successful');
        console.log('login successful');
        goToHome();
      } else {
        setLoginMessage('Login failed');
        console.log('login failed');
      }
    }
     catch (error) {
      setLoginMessage('Login error');
      console.error('Login error:', error);
    }
    // goToHome();
  };

  useEffect(() => {
    if (loginMessage) {
      const timer = setTimeout(() => {
        setLoginMessage('');
      }, 2000); // Clears the message after 2000 milliseconds

      // Cleanup function to clear the timeout if the component unmounts
      // or if the message changes before the timeout completes
      return () => clearTimeout(timer);
    }
  }, [loginMessage]); 


  return (
    <Box>
    <img id="login-snow" src={snow} alt="logo"></img>
    {/* <Divider color='primary' /> */}
    <Grid container alignItems="left" justify="left" style={{ minHeight: '60vh', backgroundColor: 'inherit' }}>
      <Paper elevation={10} style={{ padding: 10, width: 400, height:200, margin: "30px auto" , backgroundColor:'inherit'}}>
        <Grid container direction="column" spacing={1} alignSelf="left">
          {/* <Avatar style={{ backgroundColor: '#1bbd7e' }}> */}
            {/* <LockOutlinedIcon /> */}
          {/* </Avatar> */}
          {/* <h2>Sign In</h2> */}
          <Box sx={{ display: 'flex', justify: "left",alignItems: 'center', gap: 0, margin: 0, padding: 0 }}>
            <PersonOutlineRoundedIcon color='secondary'/>
            <TextField label='Username' placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} fullWidth required  InputLabelProps={{ style: { color: 'white' } }}   InputProps={{style: { color: 'white' }}}/>
          </Box>
          <Box sx={{ display: 'flex', justify: "left",alignItems: 'center', gap:0}}>
            <LockOutlinedIcon color='secondary'/>
            <TextField label='Password' placeholder='Enter password' type='password' onChange={(e)=>setPassword(e.target.value)} fullWidth required  InputLabelProps={{ style: { color: 'white' } }}   InputProps={{style: { color: 'white' }}} /> 
          </Box>
          <FormControlLabel class="whitten"
            control={
              <Checkbox
                name="checkedB"
                color="primary"
                sx={{
                  color: 'white', // Color when unchecked
                  '&.Mui-checked': {
                    color: 'white', // Color when checked
                  },
                }}
              />
            }
            label="Remember me"
          />
          <Grid align="center">
            <Button type='submit' color='secondary' variant="contained" id="login-butt" fullWidth={false}
            onClick={handleClickLogin}
            >Login
            </Button>
            {loginMessage && <p class='whitten'>{loginMessage}</p>}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    </Box>
  );
};


export default Login;
