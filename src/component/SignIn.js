import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios'; // Import Axios
import * as React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

function Login() {

  
  const[pass,setPass]=React.useState();
  const[email,setEmail]=React.useState();
  const handleSubmit=async(e)=>{
    await
        axios.post("https://localhost:3001/users",{"email":email,"password":pass});
  }

  return (
    <div className='body1'>
      <br></br><br></br><br></br>
      <Grid container spacing={8}>
        <Grid item md={4}>

        </Grid>

        <Grid item md={4}>
          <div className='box1'>
            <br></br><br></br><br></br>
            <h2>Sign in to continue</h2>
            <br></br>
            <TextField id="outlined-basic" label="Email" variant="outlined" required onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br><br></br>
            <TextField id="outlined-basic" label="Password" variant="outlined" required onChange={(e)=>{setPass(e.target.value)}}/><br></br><br></br>
            <Link to="/ho">
            <Button variant="contained" onClick={handleSubmit}>LOG IN</Button>
            </Link>
            <br></br><br></br><br></br>
            <a href='ldk'><u>Forgot Password?</u></a>
            <br></br><br></br>

            <p>Don't have an account?<Link to="/re"><a href='lkms'>Create one here!</a></Link></p>
          
            <br></br><br></br><br></br>
          </div>
        </Grid>

      </Grid>

    </div>
  );
}

export default Login;
