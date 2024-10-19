import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const QuizGame = ({ questions }) => {
  const [loading, setLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (questions.length > 0) {
      setLoading(false);
    }
  }, [questions]);

  if (loading) {
    return <Loader />;
  }

  if (questions.length === 0) {
    return <h2>No questions available</h2>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <p>{question.question_text}</p>
      <p>Question {currentQuestionIndex + 1}/{questions.length}</p>
      <p>Time Left: {/* Add logic for timer here */}</p>
      <ul>
        {question.options.map((option) => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ul>
      <button>Next Question</button>
    </div>
  );
};

export default QuizGame;