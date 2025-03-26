import React, { useState } from "react";
import "../styles/global/profile.css";

const Profile = () => {
  // Sample user data (can be replaced with real API data)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "/images/user-placeholder.png", // Store in public/images
    progress: 75, // Example: 75% completed
  });

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      {/* Profile Card */}
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-email">{user.email}</p>

        {/* Progress Tracker */}
        <div className="progress-section">
          <h3>Learning Progress</h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${user.progress}%` }}
            >
              {user.progress}% Completed
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
