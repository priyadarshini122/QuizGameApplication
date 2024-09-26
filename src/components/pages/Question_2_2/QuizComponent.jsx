import React from 'react';
import styles from './QuizComponent.module.css';
import Header from './Header';
import QuizContent from './QuizContent';

function QuizComponent() {
  return (
    <div className={styles.quizContainer}>
      <Header />
      <QuizContent />
    </div>
  );
}

export default QuizComponent;