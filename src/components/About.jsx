// import React from 'react';

// const About = () => {
//   // Implement bus list rendering logic here
//   return (
//     <div>
//       <h2>Available Buses</h2>
//       {/* Display bus information */}
//     </div>
//   );
// };

// export default About;

import React from 'react';
import './About.css';
const About = () => {
    const services = ['Online booking for various destinations',
    'Comfortable seating arrangements',
    '24/7 customer support',
    'Secure payment options',
    'Multiple bus operators and routes',
  ];
      
  
    const userReviews = [
      {
        id: 1,
        name: 'John Doe',
        review:
          'I have been using this bus booking service for a while now, and it never disappoints! Quick and easy booking process with excellent customer service.',
        avatar: 'https://img.freepik.com/premium-photo/portrait-young-bearded-indian-man-streets-outdoors_251136-80087.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Replace with actual image URL
      },
      {
        id: 2,
        name: 'Jane Smith',
        review:
          'Highly recommended! The buses are always clean and comfortable. I appreciate the wide range of routes available.',
        avatar: 'https://img.freepik.com/free-photo/young-handsome-indian-man-wearing-sunglasses-while-thinking-against-street-outdoors_231208-2791.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Replace with actual image URL
      },
    ];
  
    return (
      <div className="about-container">
        <h2>About Our  Service</h2>
        <div className="services">
          <h3></h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
  
        <div className="user-reviews">
          <h3>User Reviews</h3>
          {userReviews.map((review) => (
            <div className="review" key={review.id}>
              <img src={review.avatar} alt={review.name} className="avatar" />
              <div className="review-details">
                <p>{review.review}</p>
                <p>- {review.name}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: tatabus@example.com</p>
          <p>Phone: +94711570768</p>
        </div>
      </div>
    );
  };
  
  export default About;