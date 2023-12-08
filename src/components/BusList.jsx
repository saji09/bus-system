import React, { useState } from 'react';
import Busses from './ImageLoop';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
  name: 'speed',
  from: 'Jaffna at 12pm',
  to: 'Kandy' },
  { src: 'https://www.shutterstock.com/image-photo/white-modern-comfortable-tourist-bus-600nw-2273138663.jpg',
  name: 'express',
  from: 'Colombo at 8am',
  to: 'jaffna' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
  name: 'AC',
  from: 'vavuniya at 3pm',
  to: 'jaffna' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg/1200px-LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg',
  name: 'Luxury',
  from: 'Ella at 1am',
  to: 'jaffna' },
  // Add more image objects as needed...
];

const handleClick = () => {
   return images.name;
};

function BusList() {
  return (
    <div className="App">
      <h1>Available Busses</h1> <br/>
      <a href="./booking" onClick={handleClick} target="_blank" rel="noopener noreferrer">
      <Busses images={images} />
      </a>
    </div>
  );
}

export default BusList;
