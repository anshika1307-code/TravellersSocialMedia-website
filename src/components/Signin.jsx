import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './LoginForm.css';



const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Profile')
    } catch (e) {
      setError(e.message)
      alert(e.message)
    }
  };

  return (
    
    <div className="bg-modal">
      
    <div className="modal-content">
      <div className="close"><Link to="/">+</Link></div>
      <form action onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="email address" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button type='submit' className="btn btn-outline-success my-5 my-sm-0 loginicon save_button">Login</button>
        <a href='#'>Forgotten password?</a>
        <hr className='line'></hr>
        <button className="btn btn-outline-success my-5 my-sm-0 loginicon save_button1"><Link to='/signup'>Create New Account</Link></button>
      </form>
    </div>
  </div>
    
         
  
  );
};

export default Signin;
