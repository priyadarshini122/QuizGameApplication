import React from 'react';
import Header from './Header';
import QuizQuestion from './QuizQuestion';
import styles from './QuizComponent.module.css';

function QuizComponent() {
  return (
    <main className={styles.quizContainer}>
      <Header />
      <QuizQuestion />
    </main>
  );
}

export default QuizComponent;