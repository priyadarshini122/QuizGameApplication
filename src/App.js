import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react'; // Ensure Navigate is imported
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import QuizGame from './components/QuizGame';
import GameResults from './components/GameResults';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [questions, setQuestions] = useState([]);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home setQuestions={setQuestions} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/quiz-game" element={isAuthenticated ? <QuizGame questions={questions} /> : <Navigate to="/login" />} />
        <Route path="/game-results" element={isAuthenticated ? <GameResults /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
