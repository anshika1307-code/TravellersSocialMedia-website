import React from 'react';

function ImageDescriptionLayout({ images }) {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl text-center mb-8">About Us</h2>
      <div>
        {images.map((item, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
            <div className="flex-1">
              <img src={item.imageUrl} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold py-6">{item.heading}</h1>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDescriptionLayout;
