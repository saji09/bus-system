import React from 'react';
import ImageLoop from './ImageLoop';
import '../App.css';

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg/1200px-LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg' },
  { src: 'https://www.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-600nw-2273138663.jpg' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg' },
  // Add more image objects as needed...
];

const BusList = () => {
  // Implement bus list rendering logic here
  return (
    <div className="App">
      <h1>Available Busses</h1>
      <ImageLoop images={images} />
    </div>
  );
};

export default BusList;
