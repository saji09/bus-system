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
  const totalUsers = 500;
  const totalBusRoutes = 30;
  const totalServices = 100;

  return (
 
    
    <div className="home-container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <p><h3>NOW, GET MORE THAN JUST BUS TICKETS WITH</h3> <h1>APPTIBUS!</h1></p>
      </div>
      <div>
        <h3>Book Your Bus Tickets <a href='./login'> Here!!!!!!!</a></h3>
      </div>
      <h1></h1>
      <div>
   <div class="cards-list">
  
   <div class="card 2">
    <div class="card_image">
      <img src="https://img.freepik.com/free-vector/realistic-polygonal-background_52683-60158.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" />
      </div>
    <div class="card_title title-black">
      <p>Total Users</p>
      <p>1897</p>
    </div>
  </div>
  <div class="card 1">
    <div class="card_image"> <img src="https://img.freepik.com/free-vector/blue-white-crystal-textured-background_53876-86341.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" /> </div>
    <div class="card_title title-black">
      <p>Total Bus Services</p>
      <p>97</p>
    </div>
  
    </div>
  
  
  <div class="card 3">
    <div class="card_image">
      <img src="https://img.freepik.com/free-vector/paper-style-smooth-background_23-2148967339.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" />
    </div>
    <div class="card_title">
      <p>Total Bus Routes</p>
      <p>27  </p>
    </div>
  </div>
    
    <div class="card 4">
    <div class="card_image">
      <img src="https://img.freepik.com/premium-photo/abstract-curve-background-simple-modern_552255-1197.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" />
      </div>
    <div class="card_title title-black">
      <p>Experience</p>
      <p>7 Years+  </p>

    </div>
    </div>
  
  </div>
  <h2>Why you choose us?</h2>
  <div className="features">
        <div className="feature">
          <img src="https://img.freepik.com/free-vector/school-bus-tracking-system-abstract-concept-illustration-bus-tracking-application-school-smart-transportation-system-gps-location-tracker-mobile-navigation-software_335657-318.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="Feature 1" />
         <b><p>Convenient Booking</p></b> 
          <p>Book your bus tickets hassle-free with our easy-to-use platform.</p>
        </div>
        <div className="feature">
          <img src="https://img.freepik.com/premium-vector/internet-service-book-buy-bus-ticket-travel-tourism-concept-tourist-planning-trip-online-passengers-buying-tickets-bus-mobile-app-vector-design_458444-1502.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="Feature 1" />
        <b> <p>Ease of Use</p></b> 
          <p>Book your bus tickets hassle-free with our easy-to-use platform.</p>
        </div>
        <div className="feature">
          <img src="https://img.freepik.com/premium-photo/role-logistics-globalised-5g-tecnology-concept_250469-9924.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="Feature 2" />
        <b><p>Wide Network</p></b>  
          <p>Access to a vast network of bus routes and destinations.</p>
        </div>
        {/* Add more features with images and descriptions */}
      </div>
      <br/> 
      <h2>Our Partners</h2>
      <br/>
      <div className="partner-companies">
        
        {/* Display partner company logos */}
        {/* Replace with actual logos and adjust layout */}
        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-photo/bus-green-energy_311470-13.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="GreenBus" /><br />
          GreenBus
        </div>
        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-photo/green-white-circle-with-word-it_849715-2422.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="Partner 2" /><br />
          Toyoto
        </div>  
        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-photo/stellar-crypto-simple-minimal-modern-corporate-gradient-3d-illustration-background_476123-2219.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="" /><br />
         Travely
        </div>

        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-photo/blue-ribbon-with-red-blue-ribbon-it_14117-15362.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="" /><br />
       Yaalzhy
        </div>

        <div className="partner-logo">
          <img src="https://img.freepik.com/free-photo/3d-render-shopping-cart-icon-illustration-design-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-8387.jpg?w=826&t=st=1701851335~exp=1701851935~hmac=2bd5d1e1b683b054fa4a0d8ec10d38c2df2dffccdb7b64384f0d9df655e0de16" alt="" /><br />
          Tamilyo
        </div>
        <div className="partner-logo">
          <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=sph" alt="" /><br />
Freedom        </div>
        <div className="partner-logo">
          <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=sph" alt="" /><br />
          Jaffnese
        </div> 
        <div className="partner-logo">
          <img src="https://img.freepik.com/premium-vector/modern-initial-letter-h-logo-business-logo-flat_460675-48.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=sph" alt="" /><br />
      Havana
        </div>

      
        {/* Add more partner logos as needed */}
      </div>
      <h2>Payment Options</h2>
      <br/>
      <div className="payment-options">
        
        {/* Display partner company logos */}
        {/* Replace with actual logos and adjust layout */}
        <div className="payment">
          <img src="https://img.freepik.com/free-vector/bitcoins-falling-illustration_1262-6777.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=sph" alt="pay1" /><br />
         Bitcoin
        </div>
        <div className="payment">
          <img src="https://img.freepik.com/free-photo/businessman-showing-credit-card_53876-105194.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="pay1" /><br />
Credit Card
        </div>
        <div className="payment">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIrkGtqvy1JcAVG8OUNcgGJQ9-c3RBQRPnw&usqp=CAU" alt="pay1" /><br />
Paytm
        </div>
        <div className="payment">
          <img src="https://img.freepik.com/premium-photo/woman-hands-holding-smartphone-with-paypal-apps-screen-paypal-is-online-electronic-payment-system_89286-194.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="pay1" /><br />
         PayPal
        </div>
        <div className="payment">
          <img src="https://img.freepik.com/premium-photo/mobile-online-banking-concept_12892-62.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais" alt="pay1" /><br />
       Online Banking
        </div>
        
        {/* Add more partner logos as needed */}
      </div>
      </div>
    </div>
  );
};

export default Home;
