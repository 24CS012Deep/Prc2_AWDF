import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound Component
 * 404 error fallback view for unmatched routes.
 */
function NotFound() {
  return (
    <div className="notfound-box glass-box">
      <div className="notfound-code">404</div>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        The requested path does not exist in this application.
      </p>
      <Link to="/" className="submit-btn">
        ← Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
