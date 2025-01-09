// // // import React, { useState } from 'react';
// // // import { FaStar, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
// // // import { Switch } from '@headlessui/react';
// // // import { motion } from 'framer-motion';

// // // const TravelPostForm = ({ onClose }) => {
// // //   const [step, setStep] = useState(1);
// // //   const [formData, setFormData] = useState({
// // //     mainLocation: '',
// // //     duration: '',
// // //     budgetCategory: '',
// // //     overallRating: 3,
// // //     placesVisited: [],
// // //     foodItems: [],
// // //     hotels: [],
// // //     expenses: [],
// // //     recommendation: '',
// // //     wouldRecommend: false,
// // //   });

// // //   // Navigation
// // //   const nextStep = () => setStep(step + 1);
// // //   const prevStep = () => setStep(step - 1);

// // //   // Input Handlers
// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleRatingChange = (value) => {
// // //     setFormData({ ...formData, overallRating: value });
// // //   };

// // //   // Components for each step
// // //   const Step1 = () => (
// // //     <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // //       <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
// // //       <div className="space-y-4">
// // //         <div>
// // //           <label className="block text-sm font-medium">Main Location</label>
// // //           <input type="text" name="mainLocation" value={formData.mainLocation} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Enter location" />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium">Duration of Trip (Days)</label>
// // //           <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Enter duration in days" />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium">Budget Category</label>
// // //           <select name="budgetCategory" value={formData.budgetCategory} onChange={handleChange} className="w-full p-2 border rounded-lg">
// // //             <option value="">Select</option>
// // //             <option value="low">Low</option>
// // //             <option value="medium">Medium</option>
// // //             <option value="luxury">Luxury</option>
// // //           </select>
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium">Overall Rating</label>
// // //           <div className="flex space-x-2">
// // //             {[1, 2, 3, 4, 5].map((value) => (
// // //               <FaStar key={value} className={`cursor-pointer ${formData.overallRating >= value ? 'text-yellow-500' : 'text-gray-400'}`} onClick={() => handleRatingChange(value)} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <ProgressBar />
// // //       <div className="mt-6 flex justify-between">
// // //         <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Cancel</button>
// // //         <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Next</button>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   const Step2 = () => (
// // //     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // //       <h2 className="text-2xl font-bold mb-4">Places Visited</h2>
// // //       <div>
// // //         <label className="block text-sm font-medium">Add Place</label>
// // //         <input type="text" name="place" onChange={(e) => setFormData({ ...formData, placesVisited: [...formData.placesVisited, e.target.value] })} className="w-full p-2 border rounded-lg" placeholder="Enter place name" />
// // //         <FaPlusCircle className="text-blue-500 mt-2 cursor-pointer" />
// // //       </div>
// // //       <ProgressBar />
// // //       <div className="mt-6 flex justify-between">
// // //         <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Back</button>
// // //         <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Next</button>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   const Step3 = () => (
// // //     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // //       <h2 className="text-2xl font-bold mb-4">Food & Hotels</h2>
// // //       <div>
// // //         <label className="block text-sm font-medium">Add Food Item</label>
// // //         <input type="text" name="food" onChange={(e) => setFormData({ ...formData, foodItems: [...formData.foodItems, e.target.value] })} className="w-full p-2 border rounded-lg" placeholder="Enter food name" />
// // //         <FaPlusCircle className="text-blue-500 mt-2 cursor-pointer" />
// // //       </div>
// // //       <div className="mt-4">
// // //         <label className="block text-sm font-medium">Add Hotel</label>
// // //         <input type="text" name="hotel" onChange={(e) => setFormData({ ...formData, hotels: [...formData.hotels, e.target.value] })} className="w-full p-2 border rounded-lg" placeholder="Enter hotel name" />
// // //         <FaPlusCircle className="text-blue-500 mt-2 cursor-pointer" />
// // //       </div>
// // //       <ProgressBar />
// // //       <div className="mt-6 flex justify-between">
// // //         <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Back</button>
// // //         <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Next</button>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   const Step4 = () => (
// // //     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // //       <h2 className="text-2xl font-bold mb-4">Expenses</h2>
// // //       <div>
// // //         <label className="block text-sm font-medium">Add Expense</label>
// // //         <input type="text" name="expense" onChange={(e) => setFormData({ ...formData, expenses: [...formData.expenses, e.target.value] })} className="w-full p-2 border rounded-lg" placeholder="Enter expense name" />
// // //         <FaPlusCircle className="text-blue-500 mt-2 cursor-pointer" />
// // //       </div>
// // //       <ProgressBar />
// // //       <div className="mt-6 flex justify-between">
// // //         <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Back</button>
// // //         <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Next</button>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   const Step5 = () => (
// // //     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // //       <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
// // //       <textarea name="recommendation" value={formData.recommendation} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Share your recommendation" />
// // //       <ProgressBar />
// // //       <div className="mt-6 flex justify-between">
// // //         <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Back</button>
// // //         <button onClick={onClose} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">Submit</button>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   const ProgressBar = () => (
// // //     <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
// // //       <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
// // //       <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
// // //         {step === 1 && <Step1 />}
// // //         {step === 2 && <Step2 />}
// // //         {step === 3 && <Step3 />}
// // //         {step === 4 && <Step4 />}
// // //         {step === 5 && <Step5 />}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TravelPostForm;


// // import React, { useState } from 'react';
// // import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

// // const TravelPostForm = ({ onClose }) => {
// //   const [formData, setFormData] = useState({
// //     caption: '',
// //     image: '',
// //     mainLocation: '',
// //     subLocations: [],
// //     overallRating: 3,
// //     duration: '',
// //     cost: 0,
// //     tags: [],
// //   });

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // Handle dynamic sub-location addition
// //   const handleAddSubLocation = () => {
// //     setFormData({
// //       ...formData,
// //       subLocations: [...formData.subLocations, { name: '', type: '', cost: 0, rating: 0 }],
// //     });
// //   };

// //   // Handle sub-location change
// //   const handleSubLocationChange = (index, field, value) => {
// //     const updatedSubLocations = [...formData.subLocations];
// //     updatedSubLocations[index][field] = value;
// //     setFormData({ ...formData, subLocations: updatedSubLocations });
// //   };

// //   // Handle sub-location removal
// //   const handleRemoveSubLocation = (index) => {
// //     const updatedSubLocations = formData.subLocations.filter((_, i) => i !== index);
// //     setFormData({ ...formData, subLocations: updatedSubLocations });
// //   };

// //   // Form submission (you can replace this with your API call)
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
// //       <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
// //         <h2 className="text-2xl font-bold mb-4">Create Travel Post</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {/* Caption */}
// //           <div>
// //             <label className="block text-sm font-medium">Caption</label>
// //             <input
// //               type="text"
// //               name="caption"
// //               value={formData.caption}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Add a caption"
// //             />
// //           </div>

// //           {/* Image URL */}
// //           <div>
// //             <label className="block text-sm font-medium">Image URL</label>
// //             <input
// //               type="text"
// //               name="image"
// //               value={formData.image}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter image or video URL"
// //             />
// //           </div>

// //           {/* Main Location */}
// //           <div>
// //             <label className="block text-sm font-medium">Main Location</label>
// //             <input
// //               type="text"
// //               name="mainLocation"
// //               value={formData.mainLocation}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter main location (e.g., Manali)"
// //             />
// //           </div>

// //           {/* Sub-Locations */}
// //           <div>
// //             <label className="block text-sm font-medium">Sub-Locations</label>
// //             {formData.subLocations.map((subLocation, index) => (
// //               <div key={index} className="flex space-x-2 items-center mb-2">
// //                 <input
// //                   type="text"
// //                   placeholder="Name (e.g., Solang Valley)"
// //                   value={subLocation.name}
// //                   onChange={(e) => handleSubLocationChange(index, 'name', e.target.value)}
// //                   className="flex-1 p-2 border rounded-lg"
// //                 />
// //                 <select
// //                   value={subLocation.type}
// //                   onChange={(e) => handleSubLocationChange(index, 'type', e.target.value)}
// //                   className="p-2 border rounded-lg"
// //                 >
// //                   <option value="">Type</option>
// //                   <option value="place">Place</option>
// //                   <option value="hotel">Hotel</option>
// //                   <option value="restaurant">Restaurant</option>
// //                 </select>
// //                 <input
// //                   type="number"
// //                   placeholder="Cost"
// //                   value={subLocation.cost}
// //                   onChange={(e) => handleSubLocationChange(index, 'cost', e.target.value)}
// //                   className="w-20 p-2 border rounded-lg"
// //                 />
// //                 <input
// //                   type="number"
// //                   placeholder="Rating"
// //                   value={subLocation.rating}
// //                   onChange={(e) => handleSubLocationChange(index, 'rating', e.target.value)}
// //                   className="w-20 p-2 border rounded-lg"
// //                   max="5"
// //                   min="0"
// //                 />
// //                 <FaTrashAlt
// //                   className="text-red-500 cursor-pointer"
// //                   onClick={() => handleRemoveSubLocation(index)}
// //                 />
// //               </div>
// //             ))}
// //             <button
// //               type="button"
// //               onClick={handleAddSubLocation}
// //               className="flex items-center text-blue-500 mt-2"
// //             >
// //               <FaPlusCircle className="mr-2" /> Add Sub-Location
// //             </button>
// //           </div>

// //           {/* Overall Rating */}
// //           <div>
// //             <label className="block text-sm font-medium">Overall Rating</label>
// //             <input
// //               type="number"
// //               name="overallRating"
// //               value={formData.overallRating}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter overall rating (0-5)"
// //               max="5"
// //               min="0"
// //             />
// //           </div>

// //           {/* Duration */}
// //           <div>
// //             <label className="block text-sm font-medium">Duration</label>
// //             <input
// //               type="text"
// //               name="duration"
// //               value={formData.duration}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter trip duration (e.g., 3 days)"
// //             />
// //           </div>

// //           {/* Cost */}
// //           <div>
// //             <label className="block text-sm font-medium">Overall Cost</label>
// //             <input
// //               type="number"
// //               name="cost"
// //               value={formData.cost}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter overall trip cost"
// //             />
// //           </div>

// //           {/* Tags */}
// //           <div>
// //             <label className="block text-sm font-medium">Tags</label>
// //             <input
// //               type="text"
// //               name="tags"
// //               value={formData.tags.join(', ')}
// //               onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(', ') })}
// //               className="w-full p-2 border rounded-lg"
// //               placeholder="Enter tags (comma-separated)"
// //             />
// //           </div>

// //           {/* Submit Button */}
// //           <div className="mt-6 flex justify-between">
// //             <button
// //               onClick={onClose}
// //               type="button"
// //               className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TravelPostForm;


// import React, { useState } from 'react';
// import { FaStar, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

// const TravelPostForm = ({ onClose }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     mainLocation: '',
//     duration: '',
//     budgetCategory: '',
//     overallRating: 3,
//     placesVisited: [],
//     foodItems: [],
//     hotels: [],
//     expenses: [],
//     recommendation: '',
//     wouldRecommend: false,
//   });

//   // Navigation
//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   // Input Handlers
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRatingChange = (value) => {
//     setFormData({ ...formData, overallRating: value });
//   };

//   // Handle dynamic addition of places, food, and hotels
//   const handleAddPlace = () => {
//     setFormData({
//       ...formData,
//       placesVisited: [...formData.placesVisited, { name: '' }],
//     });
//   };

//   const handleAddFood = () => {
//     setFormData({
//       ...formData,
//       foodItems: [...formData.foodItems, { name: '' }],
//     });
//   };

//   const handleAddHotel = () => {
//     setFormData({
//       ...formData,
//       hotels: [...formData.hotels, { name: '' }],
//     });
//   };

//   // Handle changes in dynamic input fields
//   const handleDynamicChange = (index, field, value, key) => {
//     const updatedArray = [...formData[key]];
//     updatedArray[index][field] = value;
//     setFormData({ ...formData, [key]: updatedArray });
//   };

//   // Components for each step
//   const Step1 = () => (
//     <div>
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
//           onClick={nextStep}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

//   const Step2 = () => (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Places Visited</h2>
//       {formData.placesVisited.map((place, index) => (
//         <div key={index} className="flex items-center space-x-2 mb-2">
//           <input
//             type="text"
//             placeholder="Place Name"
//             value={place.name}
//             onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'placesVisited')}
//             className="w-full p-2 border rounded-lg"
//           />
//           <FaTrashAlt
//             className="text-red-500 cursor-pointer"
//             onClick={() => {
//               const updatedPlaces = formData.placesVisited.filter((_, i) => i !== index);
//               setFormData({ ...formData, placesVisited: updatedPlaces });
//             }}
//           />
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={handleAddPlace}
//         className="flex items-center text-blue-500 mt-2"
//       >
//         <FaPlusCircle className="mr-2" /> Add Place
//       </button>
//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={prevStep}
//           className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextStep}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

//   const Step3 = () => (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Food & Hotels</h2>
//       <h3 className="text-lg font-semibold">Food Items</h3>
//       {formData.foodItems.map((food, index) => (
//         <div key={index} className="flex items-center space-x-2 mb-2">
//           <input
//             type="text"
//             placeholder="Food Item"
//             value={food.name}
//             onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'foodItems')}
//             className="w-full p-2 border rounded-lg"
//           />
//           <FaTrashAlt
//             className="text-red-500 cursor-pointer"
//             onClick={() => {
//               const updatedFood = formData.foodItems.filter((_, i) => i !== index);
//               setFormData({ ...formData, foodItems: updatedFood });
//             }}
//           />
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={handleAddFood}
//         className="flex items-center text-blue-500 mt-2"
//       >
//         <FaPlusCircle className="mr-2" /> Add Food Item
//       </button>

//       <h3 className="text-lg font-semibold mt-4">Hotels</h3>
//       {formData.hotels.map((hotel, index) => (
//         <div key={index} className="flex items-center space-x-2 mb-2">
//           <input
//             type="text"
//             placeholder="Hotel Name"
//             value={hotel.name}
//             onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'hotels')}
//             className="w-full p-2 border rounded-lg"
//           />
//           <FaTrashAlt
//             className="text-red-500 cursor-pointer"
//             onClick={() => {
//               const updatedHotels = formData.hotels.filter((_, i) => i !== index);
//               setFormData({ ...formData, hotels: updatedHotels });
//             }}
//           />
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={handleAddHotel}
//         className="flex items-center text-blue-500 mt-2"
//       >
//         <FaPlusCircle className="mr-2" /> Add Hotel
//       </button>
//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={prevStep}
//           className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextStep}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
//         {step === 1 && <Step1 />}
//         {step === 2 && <Step2 />}
//         {step === 3 && <Step3 />}
//       </div>
//     </div>
//   );
// };

// export default TravelPostForm;


import React, { useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

const TravelPostForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mainLocation: '',
    duration: '',
    budgetCategory: '',
    overallRating: 3,
    placesVisited: [],
    foodItems: [],
    hotels: [],
    expenses: [],
    recommendation: '',
    wouldRecommend: false,
  });

  // Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Input Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Dynamic Field Handlers
  const handleAddPlace = () => {
    setFormData({
      ...formData,
      placesVisited: [...formData.placesVisited, { name: '', type: '', rating: '' }],
    });
  };

  const handleAddFood = () => {
    setFormData({
      ...formData,
      foodItems: [...formData.foodItems, { name: '', location: '', budgetType: '', rating: '' }],
    });
  };

  const handleAddHotel = () => {
    setFormData({
      ...formData,
      hotels: [...formData.hotels, { name: '', rating: '', cost: '' }],
    });
  };

  // Handle changes in dynamic input fields
  const handleDynamicChange = (index, field, value, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  // Components for each step
  const Step1 = () => (
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
            placeholder="Enter location"
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
            placeholder="Enter duration in days"
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
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">
          Cancel
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );

  const Step2 = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Places Visited</h2>
      {formData.placesVisited.map((place, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Place Name"
            value={place.name}
            onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'placesVisited')}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Type (e.g., Beach, Museum)"
            value={place.type}
            onChange={(e) => handleDynamicChange(index, 'type', e.target.value, 'placesVisited')}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Rating (0-5)"
            value={place.rating}
            onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'placesVisited')}
            className="w-full p-2 border rounded-lg"
          />
          <FaTrashAlt
            className="text-red-500 cursor-pointer"
            onClick={() => {
              const updatedPlaces = formData.placesVisited.filter((_, i) => i !== index);
              setFormData({ ...formData, placesVisited: updatedPlaces });
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddPlace} className="flex items-center text-blue-500 mt-2">
        <FaPlusCircle className="mr-2" /> Add Place
      </button>
    </div>
  );

  const Step3 = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Food Items</h2>
      {formData.foodItems.map((food, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Food Item"
            value={food.name}
            onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'foodItems')}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={food.location}
            onChange={(e) => handleDynamicChange(index, 'location', e.target.value, 'foodItems')}
            className="w-full p-2 border rounded-lg"
          />
          <select
            value={food.budgetType}
            onChange={(e) => handleDynamicChange(index, 'budgetType', e.target.value, 'foodItems')}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Budget Type</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="number"
            placeholder="Rating (0-5)"
            value={food.rating}
            onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'foodItems')}
            className="w-full p-2 border rounded-lg"
          />
          <FaTrashAlt
            className="text-red-500 cursor-pointer"
            onClick={() => {
              const updatedFoodItems = formData.foodItems.filter((_, i) => i !== index);
              setFormData({ ...formData, foodItems: updatedFoodItems });
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddFood} className="flex items-center text-blue-500 mt-2">
        <FaPlusCircle className="mr-2" /> Add Food Item
      </button>
    </div>
  );

  const Step4 = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hotels</h2>
      {formData.hotels.map((hotel, index) => (
        <div key={index} className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Hotel Name"
            value={hotel.name}
            onChange={(e) => handleDynamicChange(index, 'name', e.target.value, 'hotels')}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Rating (0-5)"
            value={hotel.rating}
            onChange={(e) => handleDynamicChange(index, 'rating', e.target.value, 'hotels')}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Cost"
            value={hotel.cost}
            onChange={(e) => handleDynamicChange(index, 'cost', e.target.value, 'hotels')}
            className="w-full p-2 border rounded-lg"
          />
          <FaTrashAlt
            className="text-red-500 cursor-pointer"
            onClick={() => {
              const updatedHotels = formData.hotels.filter((_, i) => i !== index);
              setFormData({ ...formData, hotels: updatedHotels });
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddHotel} className="flex items-center text-blue-500 mt-2">
        <FaPlusCircle className="mr-2" /> Add Hotel
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>
    </div>
  );
};

export default TravelPostForm;
