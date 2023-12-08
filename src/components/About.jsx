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
<div className='p'>
<p >We, Apptibus is Sri Lanka’s largest online bus/coach reservation platform that has transformed the way millions of Sri Lankans travel and purchase seats to travel across the country.
</p>
<p>Apptibus is a collaboration between Sri Lanka Transport Board (SLTB) and Hands Global Holdings (Private) Limited (HGHL). SLTB is the state owned transportation service in Sri Lanka and is the largest and most reliable service provider in the country. It has a large fleet of buses covering the entire country from highway buses to buses operating in the remotest part of the country. HGHL is part of a group of companies which includes Ohmygosh.lk, Duro Pipe Industrial Ltd, St. Joseph’s Exports (Pvt) Ltd and Duro Capital (Pvt) Ltd.</p>
<p>We offer Online bus ticket booking services, reservations through our 24 X 7 hotline 1315, bus tracking facilities and fleet management services. Our payment gateways are secured and we have partnered with Peoples Bank PLC.</p>
<p>Once you reserve a seat with us you can change/modify subject to our seat cancellation policy. Furthermore, you will be promptly notified if a bus that you have booked has been changed or time schedules change. Everyone booking through us and using our mobile App can track the bus online and passengers can reserve their seats one month ahead of the journey.</p>

</div>
const About = () => {
    const services = [
  ];

  
    const userReviews = [
      {
        id: 1,
        name: 'Prashanth',
        review:
          'I have been using this bus booking service for a while now, and it never disappoints! Quick and easy booking process with excellent customer service.',
        avatar: 'https://img.freepik.com/premium-photo/portrait-young-bearded-indian-man-streets-outdoors_251136-80087.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Replace with actual image URL
      },
      {
        id: 2,
        name: 'Sriraam',
        review:
          'Highly recommended! The buses are always clean and comfortable. I appreciate the wide range of routes available.',
        avatar: 'https://img.freepik.com/free-photo/young-handsome-indian-man-wearing-sunglasses-while-thinking-against-street-outdoors_231208-2791.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Replace with actual image URL
      },
      {
        id: 3,
        name: 'Fazrima Ahmed',
        review:
          'Absolutely love this bus service!  The wide selection of routes available suits my travel needs perfectly',
        avatar: 'https://img.freepik.com/free-photo/young-woman-portrait-street_1303-13672.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Replace with actual image URL
      },
    ];
  
    return (
        
      <div className="about-container">
        <h2>About Our  Service</h2>
        <img src='https://img.freepik.com/premium-photo/online-navigation-map-smartphone-transport-bus-concept-generative-ai_847296-996.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais'></img>
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
        <div className='p'><h2>Journey</h2>
  <p >We, Apptibus is Sri Lanka’s largest online bus/coach reservation platform that has transformed the way millions of Sri Lankans travel and purchase seats to travel across the country.
</p>
<p>Apptibus is a collaboration between Sri Lanka Transport Board (SLTB) and Hands Global Holdings (Private) Limited (HGHL). SLTB is the state owned transportation service in Sri Lanka and is the largest and most reliable service provider in the country. It has a large fleet of buses covering the entire country from highway buses to buses operating in the remotest part of the country. HGHL is part of a group of companies which includes Ohmygosh.lk, Duro Pipe Industrial Ltd, St. Joseph’s Exports (Pvt) Ltd and Duro Capital (Pvt) Ltd.</p>
<p>We offer Online bus ticket booking services, reservations through our 24 X 7 hotline 1315, bus tracking facilities and fleet management services. Our payment gateways are secured and we have partnered with Peoples Bank PLC.</p>
<p>Once you reserve a seat with us you can change/modify subject to our seat cancellation policy. Furthermore, you will be promptly notified if a bus that you have booked has been changed or time schedules change. Everyone booking through us and using our mobile App can track the bus online and passengers can reserve their seats one month ahead of the journey.</p>

  </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><b>Email: </b>Info.apptibus@gmail.com</p>
          <p><b>Phone:</b> +94711570768</p>
        </div>
    
      </div>
    );
  };
  
  export default About;