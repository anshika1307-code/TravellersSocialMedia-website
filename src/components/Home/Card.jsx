import React from 'react';

function Card({ name, role, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-3">
      <img src={image} alt="Avatar" className="w-30 h-30 object-cover rounded-full" />
      <div className="p-4">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default Card;
