// import React, { useState } from 'react';

// const ExperienceCard = ({ onClose }) => {
//   const [step, setStep] = useState(2);
//   const [rating, setRating] = useState('');
//   const [transport, setTransport] = useState('');
//   const [about, setAbout] = useState('');

//   return (
//     <div>
//       <div className="flex justify-between mb-4">
//         <div className="text-center">
//           <div className={`text-${step === 1 ? 'gray-600' : 'gray-400'}`}>Experience</div>
//           <div className={`h-2 w-10 bg-${step === 1 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
//         </div>
//         <div className="text-center">
//           <div className={`text-${step === 2 ? 'gray-600' : 'gray-400'}`}>Costs</div>
//           <div className={`h-2 w-10 bg-${step === 2 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
//         </div>
//         <div className="text-center">
//           <div className="text-gray-400">Places</div>
//           <div className="h-2 w-10 bg-gray-300 rounded-full mt-1"></div>
//         </div>
//       </div>
//       {step === 2 && (
//         <div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
//               Rate your overall experience (in range of 1-10)
//             </label>
//             <input
//               type="text"
//               id="rating"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </div>
//         </div>
//       )}
//       {step === 3 && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
//               Transport*
//             </label>
//             <input
//               type="text"
//               id="transport"
//               placeholder="Transportation Cost e.g. Rs 15000"
//               value={transport}
//               onChange={(e) => setTransport(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
//               About*
//             </label>
//             <textarea
//               id="about"
//               placeholder="Enter details here"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
//             />
//           </div>
//           <div className="col-span-2">
//             <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
//               {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
//             </div>
//             <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
//               {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
//             </div>
//             <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
//               {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex justify-between mt-4">
//         {step > 1 && (
//           <button
//             onClick={() => setStep(step - 1)}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Back
//           </button>
//         )}
//         <button
//           onClick={() => setStep(step + 1)}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="button"
//         >
//           {step === 4 ? 'Submit' : 'Next'}
//         </button>
//       </div>
//       <div className="flex justify-end mt-4">
//         <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;










import React, { useState } from 'react';

const ExperienceCard = ({ onClose }) => {
  const [step, setStep] = useState(2);
  const [rating, setRating] = useState('');
  const [transport, setTransport] = useState('');
  const [about, setAbout] = useState('');
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="text-center">
          <div className={`text-${step === 2 ? 'gray-600' : 'gray-400'}`}>Experience</div>
          <div className={`h-2 w-10 bg-${step === 1 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
        </div>
        <div className="text-center">
          <div className={`text-${step === 3 ? 'gray-600' : 'gray-400'}`}>Costs</div>
          <div className={`h-2 w-10 bg-${step === 2 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
        </div>
        {/* <div className="text-center">
          <div className={`text-${step === 3 ? 'gray-600' : 'gray-400'}`}>Transport</div>
          <div className={`h-2 w-10 bg-${step === 3 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
        </div> */}
        <div className="text-center">
          <div className={`text-${step === 4 ? 'gray-600' : 'gray-400'}`}>Place</div>
          <div className={`h-2 w-10 bg-${step === 4 ? 'gray-600' : 'gray-300'} rounded-full mt-1`}></div>
        </div>
      </div>
      {step === 2 && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              Rate your overall experience (in range of 1-10)
            </label>
            <input
              type="text"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transport">
              Transport*
            </label>
            <input
              type="text"
              id="transport"
              placeholder="Transportation Cost e.g. Rs 15000"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="about">
              About*
            </label>
            <textarea
              id="about"
              placeholder="Enter details here"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
            />
          </div>
          <div className="col-span-2">
            <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
            <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
            <div className="mb-4 p-4 border rounded bg-gray-50 text-gray-700 text-sm">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
              Place
            </label>
            <input
              type="text"
              id="place"
              placeholder="Enter place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      )}
      
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Back
          </button>
        )}
        <button
          onClick={() => setStep(step + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          {step === 4 ? 'Submit' : 'Next'}
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
