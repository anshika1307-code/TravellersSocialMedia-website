import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from "react-google-button";
import { UserAuth } from '../context/AuthContext';




const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/Login')
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Login");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };
  

  return (
    
    <div className="bg-modal">
    <div className="modal-content">
        <div className="close"><Link to="/">+</Link></div>
        
        <form action onSubmit={handleSubmit}>
            <input className="firstname" type="text" placeholder="First Name" />
            <input className="lastname" type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email address or Phone Number" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Confirm Your Password" />
            <button className="btn btn-outline-success my-5 my-sm-0 loginicon save_button">
                Sign up
            </button>
            <br></br>
            <a href="#">Or Signup with</a>

            <div>
                <GoogleButton
                    className="g-btn"
                    type="dark"
                    onClick={handleGoogleSignIn}
                />
            </div>
            <hr className="line"></hr>
            <button className="btn btn-outline-success my-5 my-sm-0 loginicon save_button1">
                Already Have a Account? <Link to="/signin">Log In</Link>
            </button>
        </form>
    </div>
</div>
  );
};

export default Signup;
