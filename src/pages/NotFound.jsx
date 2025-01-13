import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Style the NotFound page

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-image">
        {/* You can use any placeholder image for Not Found */}
        <img 
          src="https://via.placeholder.com/400x300?text=404+Not+Found" 
          alt="Not Found" 
          className="notfound-img" 
        />
      </div>
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-message">
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/" className="notfound-link">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
