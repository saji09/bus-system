import React from 'react';

const Busses = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={`Img ${index}`} className="image" />
          <div className="image-details">
            <h3>{image.name}</h3>
            <p>From: {image.from}</p>
            <p>To: {image.to}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Busses;
