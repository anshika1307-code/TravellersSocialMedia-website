import React from 'react';

function CardWithBg({ name, imageUrl }) {
  return (
    <div className="relative bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${imageUrl})`, height: '200px' }}>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default CardWithBg;
