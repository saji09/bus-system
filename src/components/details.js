import React from 'react';

const DetailsLoop = ({ details }) => {

  return (
    <div>
      {details.map((details, index) => (
        key={index}
        <p>{from}</p>
        <p>{to}</p>
      ))}
    </div>
  );
};

export default DetailsLoop;
