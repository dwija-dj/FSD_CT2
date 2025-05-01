import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Team!</h1>
      <p>Meet our awesome members and their journey.</p>
      <div className="home-buttons">
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/view" className="btn">View Members</Link>
      </div>
    </div>
  );
};

export default Home;
