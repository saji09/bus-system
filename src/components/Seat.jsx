import React from 'react';

import './Seat.css';

const Seat = ({ seatNumber, selected, onClick}) => {
  return (
    <div className='box-main'>
      <div className=''>
      <div className={`seat ${selected ? 'selected' : ''}`} onClick={() => onClick(seatNumber)}>
      <span>{seatNumber}</span>
      </div>
    </div>
    </div>
  );
};

export default Seat;
