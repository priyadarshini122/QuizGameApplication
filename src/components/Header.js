import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header>
      <h1>Quiz Game</h1>
      {isAuthenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz-game">Quiz Game</Link>
      </nav>
    </header>
  );
};

export default Header;