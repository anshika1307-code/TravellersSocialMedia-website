
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

 
  const [formData, setFormData] = useState({
    user: '', 
    caption: '',
    media: [], // Array to store image/video URLs
    mainLocation: '',
    subLocations: [], // Array to store places, hotels, and food places
    overallRating: 0,
    duration: '',
    cost: 0,
    tags: [],
    recommendation: '',
    expenses: [],
  });

  // Fetch user and token from Redux store
  const user = useSelector((state) => state.authReducer.authData?.user);
  const token = useSelector((state) => state.authReducer.authData?.token);
  console.log('user in post modal', user);
  console.log('token in post modal', token);
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile()); // Fetch the user profile if token exists
    }
  }, [dispatch, token]);

  useEffect(() => {
    console.log("before user form data",user.id);
    if (user) {
      setFormData((prevData) => ({ ...prevData, user: user.id }));
    }
    console.log("after user form data",formData);
  }, [user, formData]);

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
