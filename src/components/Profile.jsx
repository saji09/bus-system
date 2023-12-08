// Profile.jsx
import React from 'react';
import './Profile.css'; // Import the CSS file for styling (ensure the file path is correct)

const Profile = () => {
  // Placeholder data for leaders and managers
  const team = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photo: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      name: 'Jane Smith',
      position: 'Manager',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photo: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    // Add more team members as needed
  ];

  return (
    <div className="profile-container">
      <h1>Company Leaders & Managers</h1>
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
