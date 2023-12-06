// import React from "react";

// import { AiOutlineExampleIcon } from 'react-icons/ai';
// import { FiArrowRight } from 'react-icons/fi';
// import HomeIcon from '@mui/icons-material/Home';

// const Home = () => {
//   return (
//     <div className="home-container">
   


//     </div>
//   );
// };

// export default Home;
import React from 'react';
import  './Home.css';
const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    // For example: console.log('Search submitted');
  };

  return (
   
    <div className="home-container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="partner-companies">
        <h2>Our Partners</h2>
        {/* Display partner company logos */}
        {/* Replace with actual logos and adjust layout */}
        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-photo/bus-green-energy_311470-13.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="GreenBus" />
        </div>
        <div className="partner-logo">
          <img src="partner2_logo.png" alt="Partner 2" />
        </div>
        {/* Add more partner logos as needed */}
      </div>

      <div className="payment-options">
        <h2>Payment Options</h2>
        {/* Display multiple payment options */}
        <img src="payment_option1.png" alt="Payment Option 1" />
        <img src="payment_option2.png" alt="Payment Option 2" />
        {/* Add more payment options as needed */}
      </div>
    </div>
  );
};

export default Home;
