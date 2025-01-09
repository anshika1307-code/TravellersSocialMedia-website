// import React, { useState } from 'react';
// import logo from '../assets/logo-white.png';
// const SignInModal = ({ isOpen, toggleSignIn, toggleSignUp }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can handle the sign-in logic
//     console.log('Sign In:', { email, password });
//     // Reset fields after sign in
//     setEmail('');
//     setPassword('');
//     toggleSignIn(); // Close the modal after sign in
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
//        <div><img
//                     className="w-36"
//                     src={logo}
//                     alt="Home"
//                   /></div>
//       <div className="bg-white p-8 rounded-lg relative w-2/4 lg:w-1/4">
//         <span className="absolute top-2 right-2 text-gray-600 cursor-pointer text-3xl" onClick={toggleSignIn}>×</span>
//         {/* <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2> */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 mt-4">
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <div className="mb-4">
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <div className='mb-2'>
//           <button type="submit" className="bg-gray-800 text-white text-xl font-bold px-4 py-4 rounded-lg mr-4 w-full">Sign In</button>
//           </div>
//           <div className='mb-4'>
//           <button className="text-gray-600 px-4 py-2 rounded-md mr-4 w-full">Forget Password ?</button>
//           </div>
//           {/* <div className=' bg-gray-500 rounded-xl h-1 mb-4'></div> */}
//           <div className="flex justify-center ml-4">         
          
//            <button onClick={toggleSignUp} className="bg-green-800 text-white px-4 py-2 rounded-lg mr-4">Create a New Account</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignInModal;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../actions/AuthAction.js';
import logo from '../assets/logo-white.png';

const SignInModal = ({ isOpen, toggleSignIn, toggleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }, navigate));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <div>
        <img className="w-36" src={logo} alt="Home" />
      </div>
      <div className="bg-white p-8 rounded-lg relative w-2/4 lg:w-1/4">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer text-3xl"
          onClick={toggleSignIn}
        >
          ×
        </span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="bg-gray-800 text-white text-xl font-bold px-4 py-4 rounded-lg mr-4 w-full"
            >
              Sign In
            </button>
          </div>
          <div className="mb-4">
            <button className="text-gray-600 px-4 py-2 rounded-md mr-4 w-full">
              Forgot Password?
            </button>
          </div>
          <div className="flex justify-center ml-4">
            <button
              onClick={toggleSignUp}
              className="bg-green-800 text-white px-4 py-2 rounded-lg mr-4"
            >
              Create a New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
