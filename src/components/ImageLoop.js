import React from 'react';

const ImageLoop = ({ images }) => {

  return (
    <div className="image-loop-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index}`}
          className="image-loop-item"
        />
      ))}
    </div>
  );
};

export default ImageLoop;
