// Profile.jsx
import React from 'react';
import './Profile.css'; // Import the CSS file for styling (ensure the file path is correct)

const Profile = () => {
  // Placeholder data for leaders and managers
  const team = [
    {
      name: 'Saji Prakash',
      position: 'CEO',
      description: 'Saji Prakash, our esteemed CEO, brings unparalleled leadership and vision to our bus booking software company. With over two decades of experience in the tech industry, Sarah has been instrumental in propelling our company to the forefront of innovation. Her strategic acumen and commitment to excellence inspire our team to redefine the boundaries of efficient travel solutions.',
      photo: 'https://img.freepik.com/free-photo/ceo-company_1098-21107.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Placeholder image URL
    },
    {
      name: 'Abarnan ',
      position: 'Manager',
      description: 'Abarnan, our astute Manager, orchestrates the seamless integration of technology and customer experience. His proficiency in overseeing operations and fostering client relationships ensures our software exceeds expectations. David`s dedication to delivering user-centric solutions has been pivotal in shaping our platform`s success.',
      photo: 'https://img.freepik.com/free-photo/handsome-male-freelancer-looking-camera-while-working-laptop-outdoors_651396-3593.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Placeholder image URL
    },
    {
        name: 'Kajantha',
        position: 'Developer',
        description: 'Kajantha, our brilliant Developer, is the architect behind the intricate code that powers our bus booking software. Her passion for cutting-edge technology and meticulous attention to detail results in robust and user-friendly applications. Emily`s innovative approach continually elevates our platforms performance and functionality.',
        photo: 'https://img.freepik.com/free-photo/photo-young-girl-sitting-desk-thinking-high-quality-photo_144627-75158.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Placeholder image URL
      },
      {
        name: 'Dilukshan',
        position: 'Designer',
        description: 'Dilukshan, our diligent Officer, is the backbone of our companys administrative framework. His adept management of resources and regulatory compliance guarantees smooth operations. Michaels commitment to maintaining operational efficiency fosters a cohesive work environment.',
        photo: 'https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?size=626&ext=jpg&ga=GA1.1.1527803959.1697433902&semt=ais', // Placeholder image URL
      },
    // Add more team members as needed
  ];

  return (
    <div className="profile-container">
        <h1>Apptibus </h1>
      <h2>Our Leaders </h2>
      <h3>Meet our BusConnect team!</h3>
      <div className="team">
        {team.map((member, index) => (
          <div key={index} className="member">
            <img src={member.photo} alt={member.name} className="profile-photo" />
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
