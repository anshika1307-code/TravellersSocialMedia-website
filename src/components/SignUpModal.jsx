// import React, { useState } from 'react';
// import {signUp } from "../actions/AuthAction.js";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import logo from '../assets/logo-white.png';
// const SignUpModal = ({ isOpen, toggleSignUp, toggleSignIn }) => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
//   const [photo, setPhoto] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);
  
//   const initialState = {
//     name: "",    
//     email: "",
//     password: "",
//     confirmpass: "",
//     profile_pic:"",
//   };
//   const loading = useSelector((state) => state.authReducer.loading);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   //const [isSignUp, setIsSignUp] = useState(false);

//   const [data, setData] = useState(initialState);

//   const [confirmPass, setConfirmPass] = useState(true);


//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handlePhotoChange = (event) => {
//     const selectedPhoto = event.target.files[0];
//     // const validExtensions = ['image/png', 'image/jpeg', 'image/svg+xml'];
//     //   if (validExtensions.includes(selectedPhoto.type)) {
//     //     setPhoto(selectedPhoto);
//     //   } else {
//     //     alert("Invalid file type. Please upload an image file (.png, .jpeg, .svg).");
//     //   }
//     setPhoto(selectedPhoto);
//     if (selectedPhoto) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoPreview(reader.result);
//       };
//       reader.readAsDataURL(selectedPhoto);
//     } else {
//       setPhotoPreview(null);
      
        
      
//     }
//   };
//   const resetForm = () => {
//     setData(initialState);
//     setConfirmPass(confirmPass);
//   };
//   const onSubmit = async (data) => {
//     console.log(data);
//     setConfirmPass(true);
//     // const newData = {
//     //    name: data.name,
//     //    email: data.email,
//     //    password: data.password,
//     //    pic: photo,
//     // };
//     console.log(data);
//     // if(data.password === data.confirmpass){
//         // const newData = JSON.stringify(data);
//         try {
//             const response = await fetch('http://localhost:5000/signup', {
//            method: "POST",
//            headers: {
//             "Content-Type": "application/json",
//            },
//            body: JSON.stringify(data),
//         });
//           console.log(response);
//         } catch(error){
//             console.log(error);
//         }
//     // }
//     // try {
//     //     dispatch(signUp(newData, navigate));
//     //     console.log(newData);
//     // } catch(error){
//     //     console.log(error);
//     // }
//     // data.password === data.confirmpass
//     //     ? dispatch(signUp(data, navigate))
//     //     : setConfirmPass(false);
//     console.log('Submitted!');
//     resetForm();
//   }
//   const handleSubmit = (event) => {
//     setConfirmPass(true);
//     event.preventDefault();
//     data.password === data.confirmpass
//         ? dispatch(signUp(data, navigate))
//         : setConfirmPass(false);
//     // Here you can handle the form submission logic
//     console.log('Submitted!');
//     // Reset fields after submission
//     // setUsername('');
//     // setEmail('');
//     // setPassword('');
//     // setConfirmPassword('');
//     // setPhoto(null);
//     setPhotoPreview(null);
//     // toggleSignUp(); // Close the modal after submission
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
//       <div><img
//                     className="w-36"
//                     src={logo}
//                     alt="Home"
//                   /></div>
//       <div className="bg-white p-9 rounded-lg relative w-2/4 lg:w-1/4">
//         <span className="absolute top-2 right-2 text-gray-600 cursor-pointer text-3xl" onClick={toggleSignUp}>×</span>
        
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <div className="relative w-24 h-24 bg-gray-200 rounded-full overflow-hidden ml-9 flex items-center justify-center ">
//               <label htmlFor="photoInput" className="absolute inset-0 flex items-center justify-center cursor-pointer">
//                 {photoPreview ? (
//                   <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
//                 ) : (
//                   <span className="text-5xl text-gray-400">+</span>
//                 )}
//               </label>
//               <input type="file" id="photoInput" accept="image/*" onChange={handlePhotoChange} className="hidden" />
//             </div>
//             <label htmlFor="photo" className="block text-sm text-center font-medium text-gray-700">Upload Photo</label>
//         </div>
//           <div className="mb-4">
//             <input type="text" placeholder="Username" 
//             value={username} onChange={(e) => setUsername(e.target.value)} 
//             value={data.name}
//             onChange={handleChange}
//             name="name"
//                   {...register("name", {
//                     required: "This field is required",
//                   })}
//             className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <div className="mb-4">
//             <input type="email" placeholder="Email" 
//             value={data.email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             name="email"
//             {...register("email", {
//               required: "This field is required",
//               pattern: {
//                 value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
//                 message: "Invalid email address",
//               },
//             })}
//             onChange={handleChange}
//             className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <div className="mb-4">
//             <input type="password" placeholder="Password" 
//             value={data.password} 
//             name="password"
//             {...register("password", {
//                     required: "This field is required",
//                   })}
//             onChange={handleChange}
//             onChange={(e) => setPassword(e.target.value)} 
//             className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <div className="mb-4">
//             <input type="password" placeholder="Confirm Password" 
//             value={data.confirmpass} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             onChange={handleChange}
//             name="confirm_pwd"
//                   {...register("confirm_pwd", {
//                     required: "This field is required",
//                   })}
//             className="mt-1 p-2 border border-gray-300 rounded-lg w-full" required />
//           </div>
//           <span
//             style={{
//               color: "red",
//               fontSize: "12px",
//               alignSelf: "flex-end",
//               marginRight: "5px",
//               display: confirmPass ? "none" : "block",
//             }}
//           >
//             *Confirm password is not same
//           </span>
          
//           <button type="submit" className="bg-gray-700 w-full text-white px-4 py-3 rounded-lg mr-4">SIGN UP</button>
//         </form>
//         <p className="mt-4 text-gray-600">Already have an account? <button className="text-blue-500" onClick={toggleSignIn}>Sign In</button></p>
//       </div>
//     </div>
//   );
// };

// export default SignUpModal;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../actions/AuthAction.js";
import logo from "../assets/logo-white.png";

const SignUpModal = ({ isOpen, toggleSignUp, toggleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [photo, setPhoto] = useState(null); // Profile picture file
  const [photoPreview, setPhotoPreview] = useState(null); // Profile picture preview
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle file change for profile picture
  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto); // Save selected file
    if (selectedPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result); // Create a preview
      reader.readAsDataURL(selectedPhoto);
    } else {
      setPhotoPreview(null);
    }
  };

  // Handle form submission
  const onSubmit = (formData) => {
    const form = new FormData();
    form.append("username", formData.name);
    form.append("email", formData.email);
    form.append("password", formData.password);
    if (photo) form.append("profilePic", photo); // Append profile picture

    // Dispatch signup action
    dispatch(signUp(form, navigate));
  };

  // Close modal if not open
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <div>
        <img className="w-36" src={logo} alt="Home" />
      </div>
      <div className="bg-white p-9 rounded-lg relative w-2/4 lg:w-1/4">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer text-3xl"
          onClick={toggleSignUp}
        >
          ×
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Picture Upload */}
          <div className="mb-4">
            <div className="relative w-24 h-24 bg-gray-200 rounded-full overflow-hidden ml-9 flex items-center justify-center">
              <label
                htmlFor="photoInput"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl text-gray-400">+</span>
                )}
              </label>
              <input
                type="file"
                id="photoInput"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
            <label
              htmlFor="photo"
              className="block text-sm text-center font-medium text-gray-700"
            >
              Upload Photo
            </label>
          </div>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              {...register("name", { required: "This field is required" })}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "This field is required" })}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === document.querySelector('input[name="password"]').value ||
                  "Passwords do not match",
              })}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-700 w-full text-white px-4 py-3 rounded-lg mr-4"
          >
            SIGN UP
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <button className="text-blue-500" onClick={toggleSignIn}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;

