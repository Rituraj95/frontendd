import React, { useState } from 'react';
import './Login.css';
import {Typography } from '@mui/material';
import {Link} from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-container">

    <form onSubmit={handleSubmit}  style={{width:'25rem',borderRadius:'0',padding:'37px'}}>
    <Typography variant='h5' className='title'>Login</Typography>

      
      <div className="form-outline mb-4">
      <i class="bi bi-person"></i>
      
        <input 
        // style={{background:'rgb(210, 226, 234)'}}
       
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email ID'
          
        />
      
      </div>

     
      <div className="form-outline mb-4">
        <input
        style={{background:'rgb(210, 226, 234)'}}
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      
      </div>

     
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
         

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
         
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      
      <div className="text-center">
        <p>
          Not a member? <Link to="/add_member">Register</Link>
        </p>
        
      </div>
    </form>
    </div>

  );
}

export default LoginForm;