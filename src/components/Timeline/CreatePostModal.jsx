// // // // // CreatePostModal.js
// // // // import React from 'react';

// // // // function CreatePostModal({ onClose }) {
// // // //   return (
// // // //     <div className="fixed inset-0 z-1000 flex items-center justify-center bg-gray-500 bg-opacity-50">
// // // //       <div className="bg-white p-4 rounded-md z-1000">
// // // //         <h2 className="text-xl font-bold mb-4">Create Post</h2>
// // // //         <input type="file" className="mb-4" />
// // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Next</button>
// // // //         <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CreatePostModal;


// // // import React, { useRef, useState } from 'react';
// // // // import React, { useState } from 'react';
// // // import upload from '../../assets/upload.png';




// // // function CreatePostModal({ onClose }) {
// // //   const [file, setFile] = useState(null);
// // //   const [placeName, setPlaceName] = useState('');
// // //   const [location, setLocation] = useState('');
// // //   const [image, setImage] = useState(null);
// // //   const fileInputRef = useRef(null);

// // //   // const handleFileChange = (event) => {
// // //   //   const file = event.target.files[0];
// // //   //   if (file) {
// // //   //     const reader = new FileReader();
// // //   //     reader.onloadend = () => {
// // //   //       setImage(reader.result);
// // //   //     };
// // //   //     reader.readAsDataURL(file);
// // //   //   }
// // //   // };

// // //   const handleImageClick = () => {
// // //     fileInputRef.current.click(); // Trigger file input click
// // //   };
// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files[0];
// // //     setFile(selectedFile);
// // //   };

// // //   const handleNext = () => {
// // //     // Here you can perform any actions needed when the "Next" button is clicked
// // //     // For example, you can upload the file and its details
// // //     console.log("File:", file);
// // //     console.log("Place Name:", placeName);
// // //     console.log("Location:", location);
// // //     // Close the modal
// // //     onClose();
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
// // //       <div className="bg-white p-4 rounded-md w-2/4">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="text-xl font-bold">Create Post</h2>
// // //           <button onClick={onClose}>
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-6 w-6"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M6 18L18 6M6 6l12 12"
// // //               />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //         <hr/>
// // //         <div className="my-4 flex flex-col items-center">
// // //           {/* <input
// // //             type="file"
// // //             className="mb-2"
// // //             onChange={handleFileChange}
// // //           /> */}
// // //           {/* <img
// // //             className="w-12 h-12 mb-2"
// // //             src={upload}
// // //             alt="upload"
// // //             onChange={handleFileChange}
// // //           /> */}
// // //           <input
// // //         type="file"
// // //         accept="image/*"
// // //         onChange={handleFileChange}
// // //         style={{ display: 'none' }}
// // //         ref={fileInputRef}
// // //       />
// // //       <img
// // //         className="w-36 h-36 mb-2 cursor-pointer ml-4"
// // //         src={upload || 'placeholder-image-url'}
// // //         alt="Upload"
// // //         onClick={handleImageClick} // Trigger file input on click
// // //       />
// // //           {/* Display image preview if file is selected */}
// // //           {file && (
// // //             <div>
// // //               <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-32 object-cover mb-2" />
// // //             </div>
// // //           )}
// // //           <p className='text-center'>Click to upload picture/video</p>
// // //           {/* Input fields for place name and location */}
// // //           <div className='flex justify-between'>
// // //           <label>Place</label>
// // //           <input
// // //             type="text"
// // //             placeholder="Name of Place"
// // //             className="w-full mb-2 ml-4 p-2 border border-gray-300 rounded"
// // //             value={placeName}
// // //             onChange={(e) => setPlaceName(e.target.value)}
// // //           />
// // //           </div>
// // //           <div className='flex justify-between'>
// // //           <label>Location</label>
// // //           <input
// // //             type="text"
// // //             placeholder="Location"
// // //             className="w-full mb-4 p-2 ml-4 border border-gray-300 rounded"
// // //             value={location}
// // //             onChange={(e) => setLocation(e.target.value)}
// // //           />
// // //           </div>
// // //         </div>
// // //         <div className="flex justify-end">
// // //           <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2" onClick={onClose}>Cancel</button>
// // //           <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>Next</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default CreatePostModal;









// // // import React, { useRef, useState } from 'react';
// // // import ExperienceCard from './ExperienceCard'; // Import the ExperienceCard component
// // // import upload from '../../assets/upload.png';

// // // function CreatePostModal({ onClose }) {
// // //   const [step, setStep] = useState(1);
// // //   const [file, setFile] = useState(null);
// // //   const [placeName, setPlaceName] = useState('');
// // //   const [location, setLocation] = useState('');
// // //   const fileInputRef = useRef(null);

// // //   const handleImageClick = () => {
// // //     fileInputRef.current.click(); // Trigger file input click
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files[0];
// // //     setFile(selectedFile);
// // //   };

// // //   const handleNext = () => {
// // //     setStep(2); // Move to the experience detail step
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-1000">
// // //       <div className="bg-white p-4 rounded-md w-2/4">
// // //         {step === 1 ? (
// // //           <>
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h2 className="text-xl font-bold">Create Post</h2>
// // //               <button onClick={onClose}>
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-6 w-6"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M6 18L18 6M6 6l12 12"
// // //                   />
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //             <hr />
// // //             <div className="my-4 flex flex-col items-center">
// // //               <input
// // //                 type="file"
// // //                 accept="image/*"
// // //                 onChange={handleFileChange}
// // //                 style={{ display: 'none' }}
// // //                 ref={fileInputRef}
// // //               />
// // //               <img
// // //                 className="w-36 h-36 mb-2 cursor-pointer ml-4"
// // //                 src={upload || 'placeholder-image-url'}
// // //                 alt="Upload"
// // //                 onClick={handleImageClick} // Trigger file input on click
// // //               />
// // //               {file && (
// // //                 <div>
// // //                   <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-32 object-cover mb-2" />
// // //                 </div>
// // //               )}
// // //               <p className="text-center">Click to upload picture/video</p>
// // //               <div className="flex justify-between w-full mb-2">
// // //                 <label className="w-1/4">Place</label>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Name of Place"
// // //                   className="w-3/4 p-2 border border-gray-300 rounded"
// // //                   value={placeName}
// // //                   onChange={(e) => setPlaceName(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="flex justify-between w-full mb-4">
// // //                 <label className="w-1/4">Location</label>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Location"
// // //                   className="w-3/4 p-2 border border-gray-300 rounded"
// // //                   value={location}
// // //                   onChange={(e) => setLocation(e.target.value)}
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-end">
// // //               <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2" onClick={onClose}>
// // //                 Cancel
// // //               </button>
// // //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>
// // //                 Next
// // //               </button>
// // //             </div>
// // //           </>
// // //         ) : (
// // //           <ExperienceCard onClose={onClose} />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default CreatePostModal;






// // import React, { useRef, useState, useEffect } from 'react';
// // import upload from '../../assets/upload.png';
// // import ExperienceCard from './ExperienceCard'; // Import the ExperienceCard component

// // function CreatePostModal({ onClose }) {
// //   const [step, setStep] = useState(1);
// //   const [files, setFiles] = useState([]);
// //   const [placeName, setPlaceName] = useState('');
// //   const [location, setLocation] = useState('');
// //   const fileInputRef = useRef(null);
// //   const locationInputRef = useRef(null);

// //   // useEffect(() => {
// //   //   if (window.google && locationInputRef.current) {
// //   //     const autocomplete = new window.google.maps.places.Autocomplete(locationInputRef.current);
// //   //     autocomplete.setFields(['address_components', 'geometry', 'name']);
// //   //     autocomplete.addListener('place_changed', () => {
// //   //       const place = autocomplete.getPlace();
// //   //       setLocation(place.name);
// //   //     });
// //   //   }
// //   // }, [locationInputRef]);

// //   const handleImageClick = () => {
// //     fileInputRef.current.click(); // Trigger file input click
// //   };

// //   // const handleFileChange = (e) => {
// //   //   const selectedFiles = Array.from(e.target.files);
// //   //   setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
// //   // };
// //   const handleFileChange = (e) => {
// //     const selectedFiles = Array.from(e.target.files);
// //     if (files.length + selectedFiles.length <= 5) {
// //       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
// //     } else {
// //       alert('You can only upload a maximum of 5 images.');
// //     }
// //   };

// //   const handleNext = () => {
// //     setStep(2); // Move to the experience detail step
// //   };

// //   const removeFile = (index) => {
// //     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-1000">
// //       <div className="bg-white p-4 rounded-md w-2/4">
// //         {step === 1 ? (
// //           <>
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-xl font-bold">Create Post</h2>
// //               <button onClick={onClose}>
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //             <hr />
// //             <div className="my-4 flex flex-col items-center">
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 multiple
// //                 onChange={handleFileChange}
// //                 style={{ display: 'none' }}
// //                 ref={fileInputRef}
// //               />
// //               <img
// //                 className="w-36 h-36 mb-2 cursor-pointer ml-4"
// //                 src={upload || 'placeholder-image-url'}
// //                 alt="Upload"
// //                 onClick={handleImageClick} // Trigger file input on click
// //               />
// //               <p className="text-center">Click to upload picture/video</p>
// //               {files.length > 0 && (
// //                 <div className="grid grid-cols-3 gap-2 mt-4">
// //                   {files.map((file, index) => (
// //                     <div key={index} className="relative">
// //                       <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="w-full h-32 object-cover" />
// //                       <button
// //                         className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
// //                         onClick={() => removeFile(index)}
// //                       >
// //                         X
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //               {/* <div className="flex justify-between w-full mb-2 mt-4">
// //                 <label className="w-1/4">Place</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Name of Place"
// //                   className="w-3/4 p-2 border border-gray-300 rounded"
// //                   value={placeName}
// //                   onChange={(e) => setPlaceName(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex justify-between w-full mb-4">
// //                 <label className="w-1/4">Location</label>
// //                 <input
// //                   type="text"
// //                   placeholder="Location"
// //                   className="w-3/4 p-2 border border-gray-300 rounded"
// //                   value={location}
// //                   onChange={(e) => setLocation(e.target.value)}
// //                   ref={locationInputRef}
// //                 />
// //               </div> */}
// //             </div>
// //             <div className="flex justify-end">
// //               <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2" onClick={onClose}>
// //                 Cancel
// //               </button>
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>
// //                 Next
// //               </button>
// //             </div>
// //           </>
// //         ) : (
// //           <ExperienceCard onClose={onClose} />
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default CreatePostModal;








// // import React, { useRef, useState, useEffect } from 'react';
// // import upload from '../../assets/upload.png';
// // // import places from 'places.js'; // Import Algolia Places

// // function CreatePostModal({ onClose }) {
// //   const [step, setStep] = useState(1);
// //   const [files, setFiles] = useState([]);
// //   const [rating, setRating] = useState('');
// //   const [transport, setTransport] = useState('');
// //   const [about, setAbout] = useState('');
// //   const [place, setPlace] = useState('');
// //   const [location, setLocation] = useState('');
// //   const fileInputRef = useRef(null);
// //   const locationInputRef = useRef(null);

// //   // useEffect(() => {
// //   //   if (locationInputRef.current) {
// //   //     const placesAutocomplete = places({
// //   //       appId: 'YOUR_ALGOLIA_APP_ID',
// //   //       apiKey: 'YOUR_ALGOLIA_API_KEY',
// //   //       container: locationInputRef.current,
// //   //     }).configure({
// //   //       type: 'address',
// //   //     });

// //   //     placesAutocomplete.on('change', (e) => {
// //   //       setLocation(e.suggestion.value);
// //   //     });
// //   //   }
// //   // }, [locationInputRef]);

// //   const handleImageClick = () => {
// //     fileInputRef.current.click(); // Trigger file input click
// //   };

// //   const handleFileChange = (e) => {
// //     const selectedFiles = Array.from(e.target.files);
// //     if (files.length + selectedFiles.length <= 5) {
// //       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
// //     } else {
// //       alert('You can only upload a maximum of 5 images.');
// //     }
// //   };

// //   const removeFile = (index) => {
// //     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-1000">
// //       <div className="bg-white p-4 rounded-md w-2/4">
// //         <div className="flex justify-between mb-4">
// //           <div className="text-center">
// //             <div className={`text-${step === 1 ? 'gray-600' : 'gray-400'}`}>Upload</div>
// //             <div className={`h-2 w-10 bg-${step === 1 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
// //           </div>
// //           <div className="text-center">
// //             <div className={`text-${step === 2 ? 'gray-600' : 'gray-400'}`}>Experience</div>
// //             <div className={`h-2 w-10 bg-${step === 2 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
// //           </div>
// //           <div className="text-center">
// //             <div className={`text-${step === 3 ? 'gray-600' : 'gray-400'}`}>Costs</div>
// //             <div className={`h-2 w-10 bg-${step === 3 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
// //           </div>
// //           <div className="text-center">
// //             <div className={`text-${step === 4 ? 'gray-600' : 'gray-400'}`}>Place</div>
// //             <div className={`h-2 w-10 bg-${step === 4 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
// //           </div>
// //         </div>

// //         {step === 1 && (
// //           <div className="my-4 flex flex-col items-center">
// //             <input
// //               type="file"
// //               accept="image/*"
// //               multiple
// //               onChange={handleFileChange}
// //               style={{ display: 'none' }}
// //               ref={fileInputRef}
// //             />
// //             <img
// //               className="w-36 h-36 mb-2 cursor-pointer ml-4"
// //               src={upload || 'placeholder-image-url'}
// //               alt="Upload"
// //               onClick={handleImageClick} // Trigger file input on click
// //             />
// //             <p className="text-center">Click to upload picture/video (Max 5 images)</p>
// //             {files.length > 0 && (
// //               <div className="grid grid-cols-3 gap-2 mt-4">
// //                 {files.map((file, index) => (
// //                   <div key={index} className="relative">
// //                     <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="w-full h-32 object-cover" />
// //                     <button
// //                       className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
// //                       onClick={() => removeFile(index)}
// //                     >
// //                       X
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //             <div className="flex justify-end mt-4 w-full">
// //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setStep(2)}>
// //                 Next
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {step === 2 && (
// //           <div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
// //                 Rate your overall experience (in range of 1-5)
// //               </label>
// //               <input
// //                 type="text"
// //                 id="rating"
// //                 value={rating}
// //                 onChange={(e) => setRating(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //             <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
// //               {/* <input type='text'placeholder='Share your Experience'/> */}
// //               <textarea
// //                 id="experience"
// //                 placeholder="Share your Experience"

// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
// //               />
// //               {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
// //             </div>
// //             <div className="flex justify-between mt-4">
// //               <button
// //                 onClick={() => setStep(1)}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Back
// //               </button>
// //               <button
// //                 onClick={() => setStep(3)}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {step === 3 && (
// //           <div className="grid grid-cols-1 gap-4">
// //             <div>
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
// //                 Transport Cost*
// //               </label>
// //               <input
// //                 type="text"
// //                 id="transport"
// //                 placeholder="Transportation Cost e.g. Rs 15000"
// //                 value={transport}
// //                 onChange={(e) => setTransport(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />

// //               {/* <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
// //                  About*
// //               </label>
// //               <textarea
// //                 id="stay"
// //                 placeholder="Enter details here"
// //                 value={about}
// //                 onChange={(e) => setAbout(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
// //               /> */}
// //                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
// //                 Stay Cost*
// //               </label>
// //               <input
// //                 type="text"
// //                 id="transport"
// //                 placeholder="Transportation Cost e.g. Rs 15000"
// //                 value={transport}
// //                 onChange={(e) => setTransport(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //               {/* <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
// //                 Food Cost*
// //               </label>
// //               <textarea
// //                 id="stay"
// //                 placeholder="Enter details here"
// //                 value={about}
// //                 onChange={(e) => setAbout(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
// //               /> */}
// //                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
// //                 Stay Cost*
// //               </label>
// //               <input
// //                 type="text"
// //                 id="transport"
// //                 placeholder="Transportation Cost e.g. Rs 15000"
// //                 value={transport}
// //                 onChange={(e) => setTransport(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>

// //             <div className="flex justify-between mt-4 w-full">
// //               <button
// //                 onClick={() => setStep(2)}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Back
// //               </button>
// //               <button
// //                 onClick={() => setStep(4)}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {step === 4 && (
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             <div>
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
// //                 Place
// //               </label>
// //               <input
// //                 type="text"
// //                 id="place"
// //                 placeholder="Enter place"
// //                 value={place}
// //                 onChange={(e) => setPlace(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
// //                 Location
// //               </label>
// //               <input
// //                 type="text"
// //                 id="location"
// //                 placeholder="Enter location"
// //                 value={location}
// //                 onChange={(e) => setLocation(e.target.value)}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //             <div className="flex justify-between mt-4 w-full">
// //               <button
// //                 onClick={() => setStep(3)}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Back
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   console.log('Submit: ', { files, rating, transport, about, place, location });
// //                   onClose();
// //                 }}
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="button"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         <div className="flex justify-end mt-4">
// //           <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>
// //             Close
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CreatePostModal;




// import React, { useState, useRef } from 'react';
// import Cropper from 'react-easy-crop';
// import upload from '../../assets/upload.png';
// // import places from 'places.js';
// function CreatePostModal({ onClose }) {
//   const [step, setStep] = useState(1);
//   const [files, setFiles] = useState([]);
//   const [cropData, setCropData] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
//   const fileInputRef = useRef(null);

//   const [rating, setRating] = useState('');
//   const [transport, setTransport] = useState('');
//   const [about, setAbout] = useState('');
//   const [place, setPlace] = useState('');
//   const [location, setLocation] = useState('');

//   const locationInputRef = useRef(null);
//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(URL.createObjectURL(file));
//     }
//   };

//   const onCropComplete = (croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   };

//   const handleCrop = async () => {
//     if (!selectedFile || !croppedAreaPixels) return;

//     const image = await fetch(selectedFile).then((res) => res.blob());
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     const img = new Image();
//     img.src = URL.createObjectURL(image);

//     img.onload = () => {
//       const { width, height } = croppedAreaPixels;
//       canvas.width = width;
//       canvas.height = height;
//       ctx.drawImage(
//         img,
//         croppedAreaPixels.x,
//         croppedAreaPixels.y,
//         croppedAreaPixels.width,
//         croppedAreaPixels.height,
//         0,
//         0,
//         width,
//         height
//       );

//       canvas.toBlob((blob) => {
//         const croppedFile = new File([blob], 'cropped.jpg', { type: 'image/jpeg' });
//         setFiles((prevFiles) => [...prevFiles, croppedFile]);
//         setSelectedFile(null); // Reset cropping
//       });
//     };
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-1000">
//       <div className="bg-white p-4 rounded-md w-2/4">
//         {step === 1 && (
//           <div className="my-4 flex flex-col items-center">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               style={{ display: 'none' }}
//               ref={fileInputRef}
//             />
//             {selectedFile ? (
//               <>
//                 <div className="relative w-full h-60">
//                   <Cropper
//                     image={selectedFile}
//                     crop={crop}
//                     zoom={zoom}
//                     aspect={1}
//                     onCropChange={setCrop}
//                     onZoomChange={setZoom}
//                     onCropComplete={onCropComplete}
//                   />
//                 </div>
//                 <div className="flex justify-between w-full mt-4">
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-md"
//                     onClick={() => setSelectedFile(null)}
//                   >
//                     Cancel
//                   </button>
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCrop}>
//                     Crop & Save
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <img
//                   className="w-36 h-36 mb-2 cursor-pointer ml-4"
//                   src={upload || 'placeholder-image-url'}
//                   alt="Upload"
//                   onClick={handleImageClick}
//                 />
//                 <p className="text-center">Click to upload picture/video (Max 5 images)</p>
//               </>
//             )}

//             {files.length > 0 && (
//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 {files.map((file, index) => (
//                   <div key={index} className="relative">
//                     <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="w-full h-32 object-cover" />
//                     <button
//                       className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                       onClick={() => setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))}
//                     >
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="flex justify-end mt-4 w-full">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setStep(2)}>
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         {/* Other steps... */}
//         {step === 2 && (
//           <div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
//                 Rate your overall experience (in range of 1-5)
//               </label>
//               <input
//                 type="text"
//                 id="rating"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
//               {/* <input type='text'placeholder='Share your Experience'/> */}
//               <textarea
//                 id="experience"
//                 placeholder="Share your Experience"

//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
//               />
//               {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => setStep(1)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={() => setStep(3)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         {step === 3 && (
//            <div>
//       <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Main Location</label>
//           <input
//             type="text"
//             name="mainLocation"
//             value={formData.mainLocation}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             placeholder="Enter location"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Duration of Trip (Days)</label>
//           <input
//             type="number"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             placeholder="Enter duration in days"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Budget Category</label>
//           <select
//             name="budgetCategory"
//             value={formData.budgetCategory}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">Select</option>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="luxury">Luxury</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Overall Rating</label>
//           <div className="flex space-x-2">
//             {[1, 2, 3, 4, 5].map((value) => (
//               <FaStar
//                 key={value}
//                 className={`cursor-pointer ${
//                   formData.overallRating >= value ? 'text-yellow-500' : 'text-gray-400'
//                 }`}
//                 onClick={() => handleRatingChange(value)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={onClose}
//           className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={() => setStep(4)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       </div>
//     </div>)}
//         {step === 4 && (
//           <div className="grid grid-cols-1 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
//                 Transport Cost*
//               </label>
//               <input
//                 type="text"
//                 id="transport"
//                 placeholder="Transportation Cost e.g. Rs 15000"
//                 value={transport}
//                 onChange={(e) => setTransport(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />

//               {/* <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
//                  About*
//               </label>
//               <textarea
//                 id="stay"
//                 placeholder="Enter details here"
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
//               /> */}
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
//                 Stay Cost*
//               </label>
//               <input
//                 type="text"
//                 id="transport"
//                 placeholder="Transportation Cost e.g. Rs 15000"
//                 value={transport}
//                 onChange={(e) => setTransport(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//               {/* <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
//                 Food Cost*
//               </label>
//               <textarea
//                 id="stay"
//                 placeholder="Enter details here"
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
//               /> */}
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
//                 Stay Cost*
//               </label>
//               <input
//                 type="text"
//                 id="transport"
//                 placeholder="Transportation Cost e.g. Rs 15000"
//                 value={transport}
//                 onChange={(e) => setTransport(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="flex justify-between mt-4 w-full">
//               <button
//                 onClick={() => setStep(2)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={() => setStep(4)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 5 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
//                 Place
//               </label>
//               <input
//                 type="text"
//                 id="place"
//                 placeholder="Enter place"
//                 value={place}
//                 onChange={(e) => setPlace(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 placeholder="Enter location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="flex justify-between mt-4 w-full">
//               <button
//                 onClick={() => setStep(3)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={() => {
//                   console.log('Submit: ', { files, rating, transport, about, place, location });
//                   onClose();
//                 }}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="flex justify-end mt-4">
//           <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreatePostModal;

import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import upload from '../../assets/upload.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/AuthAction';

function CreatePostModal({ onClose }) {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const fileInputRef = useRef(null);

  // Form Data State
  const [formData, setFormData] = useState({
    user: '', // Will be dynamically set from user authentication
    caption: '',
    media: [], // Array to store image/video URLs
    mainLocation: '',
    subLocations: [], // Array to store places, hotels, and food places
    overallRating: 0,
    duration: '',
    cost: 0,
    tags: [],
    recommendation: '',
    expenses: [], // Array to store expenses
  });

  // Fetch user and token from Redux store
  const user = useSelector((state) => state.authReducer.authData?.user);
  const token = useSelector((state) => state.authReducer.authData?.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile()); // Fetch the user profile if token exists
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({ ...prevData, user: user._id }));
    }
  }, [user]);

  // Handle Image Upload
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  // Handle Crop
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCrop = async () => {
    if (!selectedFile || !croppedAreaPixels) return;

    const image = await fetch(selectedFile).then((res) => res.blob());
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = () => {
      const { width, height } = croppedAreaPixels;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        width,
        height
      );

      canvas.toBlob((blob) => {
        const croppedFile = new File([blob], 'cropped.jpg', { type: 'image/jpeg' });
        setFiles((prevFiles) => [...prevFiles, croppedFile]);
        setSelectedFile(null); // Reset cropping
      });
    };
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Dynamic Field Handlers
  const handleAddDynamicField = (field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: [...prevFormData[field], { name: '', type: '', rating: 0 }],
    }));
  };

  const saveFilesToFormData = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      media: [...prevFormData.media, ...files],
    }));
    setFiles([]); // Clear the files after saving
  };

  const handleDynamicChange = (index, field, value, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const handleAddSubLocation = (name, type, cost, rating) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      subLocations: [
        ...prevFormData.subLocations,
        { name, type, cost: Number(cost), rating: Number(rating) },
      ],
    }));
  };

  const handleAddExpense = (name, cost) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      expenses: [...prevFormData.expenses, { name, cost: Number(cost) }],
    }));
  };

  const handleSubmit = async () => {
    console.log('handlesubmit', formData);

    try {
      // Create FormData object to handle file uploads
      const data = new FormData();

      // Append form fields to FormData
      data.append('user', formData.user);
      data.append('caption', formData.caption);
      formData.media.forEach((file) => data.append('media', file));
      data.append('mainLocation', formData.mainLocation);
      data.append('overallRating', formData.overallRating);
      data.append('duration', formData.duration);
      data.append('cost', formData.cost);
      data.append('recommendation', formData.recommendation);

      // Append subLocations and expenses as JSON strings
      data.append('subLocations', JSON.stringify(formData.subLocations));
      data.append('expenses', JSON.stringify(formData.expenses));

      console.log('Data to be sent:', data);

      // Call the createPost API
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Use the token from Redux store
        },
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Post created successfully:', result);
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-1000">
      <div className="bg-white p-4 rounded-md w-2/4">
        {/* Step 1: Image Upload */}
        {step === 1 && (
          <div className="my-4 flex flex-col items-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            {/* <input
  type="file"
  accept="image/*,video/*"
  multiple
  onChange={handleFileChange}
  style={{ display: 'none' }}
  ref={fileInputRef}
/> */}

            {selectedFile ? (
              <>
                <div className="relative w-full h-60">
                  <Cropper
                    image={selectedFile}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
                <div className="flex justify-between w-full mt-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => setSelectedFile(null)}>
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCrop}>
                    Crop & Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  className="w-36 h-36 mb-2 cursor-pointer ml-4"
                  src={upload || 'placeholder-image-url'}
                  alt="Upload"
                  onClick={handleImageClick}
                />
                <p className="text-center">Click to upload picture/video (Max 5 images)</p>
              </>
            )}
            {files.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {files.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-32 object-cover"
                    />
                    <button
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      onClick={() => setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end mt-4 w-full">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
    saveFilesToFormData();
    nextStep();
  }}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Experience Details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Experience Details</h2>
            <textarea
              placeholder="Share your experience"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="6"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={prevStep}>
                Back
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Steps 3 to 7: Trip Details */}
        {step === 3 && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Main Location</label>
        <input
          type="text"
          name="mainLocation"
          value={formData.mainLocation}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter main location"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Duration of Trip (Days)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter duration"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Budget Category</label>
        <select
          name="budgetCategory"
          value={formData.budgetCategory}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Overall Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => setFormData({ ...formData, overallRating: value })}
              className={`cursor-pointer ${formData.overallRating >= value ? 'text-yellow-500' : 'text-gray-400'}`}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-between mt-6">
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md"
        onClick={prevStep}
      >
        Back
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </div>
)}
{step === 4 && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Places Visited</h2>
    {formData.subLocations.map((place, index) => (
      <div key={index} className="flex items-center space-x-4 mb-4">
        {/* Place Name */}
        <input
          type="text"
          placeholder="Place Name"
          value={place.name || ''}
          onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'subLocations')}
          className="flex-1 p-2 border rounded-lg"
        />

        {/* Rating */}
        <input
          type="number"
          placeholder="Rating (0-5)"
          value={place.rating || ''}
          onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'subLocations')}
          className="w-24 p-2 border rounded-lg"
        />

        {/* Type */}
        <select
          value={place.type || ''}
          onChange={(e) => handleDynamicChange(index, 'type', e.target.value, 'subLocations')}
          className="w-40 p-2 border rounded-lg"
        >
          <option value="">Type</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="monument">Monument</option>
          <option value="city">City</option>
        </select>

        {/* Remove Button */}
        <button
          className="text-red-500 text-sm"
          onClick={() => {
            const updatedSubLocations = formData.subLocations.filter((_, i) => i !== index);
            setFormData({ ...formData, subLocations: updatedSubLocations });
          }}
        >
          Remove
        </button>
      </div>
    ))}

    {/* Add Place Button */}
    <button
      className="flex items-center text-blue-500 mt-2"
      onClick={() => handleAddDynamicField('subLocations')}
    >
      Add Place
    </button>

    <div className="flex justify-between mt-6">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={prevStep}>
        Back
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={nextStep}>
        Next
      </button>
    </div>
  </div>
)}
{step === 5 && (
  <div>
    <h2 className="text-xl font-bold mb-4">Food Items</h2>
    {formData.subLocations
      .filter((item) => item.type === 'restaurant') // Only show restaurants
      .map((food, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            value={food.name || ''}
            onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'subLocations')}
            className="flex-1 w-24 p-2 border rounded-lg"
          />

          {/* Rating */}
          <input
            type="number"
            placeholder="Rating (0-5)"
            value={food.rating || ''}
            onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'subLocations')}
            className="w-20 p-2 border rounded-lg"
          />

          {/* Cost */}
          <input
            type="number"
            placeholder="Cost"
            value={food.cost || ''}
            onChange={(e) => handleDynamicChange(index, 'cost', e.target.value, 'subLocations')}
            className="w-24 p-2 border rounded-lg"
          />

          {/* Remove Button */}
          <button
            className="text-red-500 text-xs"
            onClick={() => {
              const updatedSubLocations = formData.subLocations.filter((_, i) => i !== index);
              setFormData({ ...formData, subLocations: updatedSubLocations });
            }}
          >
            Remove
          </button>
        </div>
      ))}

    {/* Add Food Item Button */}
    <button
      className="flex items-center text-blue-500 mt-2"
      onClick={() => handleAddSubLocation('', 'restaurant', '', 0)}
    >
      Add Food Item
    </button>

    <div className="flex justify-between mt-6">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={prevStep}>
        Back
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={nextStep}>
        Next
      </button>
    </div>
  </div>
)}
{step === 6 && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Hotels</h2>
    {formData.subLocations
      .filter((item) => item.type === 'hotel') // Only show hotels
      .map((hotel, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          {/* Hotel Name */}
          <input
            type="text"
            placeholder="Hotel Name"
            value={hotel.name || ''}
            onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'subLocations')}
            className="flex-1 p-2 border rounded-lg"
          />

          {/* Rating */}
          <input
            type="number"
            placeholder="Rating (0-5)"
            value={hotel.rating || ''}
            onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'subLocations')}
            className="w-24 p-2 border rounded-lg"
          />

          {/* Cost */}
          <input
            type="number"
            placeholder="Cost"
            value={hotel.cost || ''}
            onChange={(e) => handleDynamicChange(index, 'cost', e.target.value, 'subLocations')}
            className="w-40 p-2 border rounded-lg"
          />

          {/* Remove Button */}
          <button
            className="text-red-500 text-sm"
            onClick={() => {
              const updatedSubLocations = formData.subLocations.filter((_, i) => i !== index);
              setFormData({ ...formData, subLocations: updatedSubLocations });
            }}
          >
            Remove
          </button>
        </div>
      ))}

    {/* Add Hotel Button */}
    <button
      className="flex items-center text-blue-500 mt-2"
      onClick={() => handleAddSubLocation('', 'hotel', '', 0)}
    >
      Add Hotel
    </button>

    <div className="flex justify-between mt-6">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={prevStep}>
        Back
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={nextStep}>
        Next
      </button>
    </div>
  </div>
)}

{step === 7 && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Expenses & Recommendations</h2>

    {/* Expenses Section */}
    <h3 className="text-lg font-bold mb-2">Expenses</h3>
    {formData.expenses.map((expense, index) => (
      <div key={index} className="flex items-center space-x-4 mb-4">
        {/* Expense Category */}
        <input
          type="text"
          placeholder="Expense Category (e.g., Transport)"
          value={expense.category || ''}
          onChange={(e) => handleDynamicChange(index, 'category', e.target.value, 'expenses')}
          className="flex-1 p-2 border rounded-lg"
        />

        {/* Cost */}
        <input
          type="number"
          placeholder="Cost"
          value={expense.cost || ''}
          onChange={(e) => handleDynamicChange(index, 'cost', e.target.value, 'expenses')}
          className="w-40 p-2 border rounded-lg"
        />

        {/* Remove Button */}
        <button
          className="text-red-500 text-sm"
          onClick={() => {
            const updatedExpenses = formData.expenses.filter((_, i) => i !== index);
            setFormData({ ...formData, expenses: updatedExpenses });
          }}
        >
          Remove
        </button>
      </div>
    ))}

    {/* Add Expense Button */}
    <button
      className="flex items-center text-blue-500 mt-2"
      onClick={() => handleAddDynamicField('expenses')}
    >
      Add Expense
    </button>

    {/* Recommendation Section */}
    <h3 className="text-lg font-bold mt-6 mb-2">Recommendation</h3>
    <textarea
      name="recommendation"
      value={formData.recommendation}
      onChange={handleChange}
      className="w-full p-2 border rounded-lg"
      rows="4"
      placeholder="Share your overall recommendation for this trip"
    />

    <div className="flex justify-between mt-6">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={prevStep}>
        Back
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
        onClick={async () => {
          console.log('Form Data:', formData);
          await handleSubmit(); // Call the function correctly
          onClose();
        }}
        
      >
        Submit
      </button>
    </div>
  </div>
)}


        <div className="flex justify-end mt-4">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;
