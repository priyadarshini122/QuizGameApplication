import React from 'react';
import styles from './QuizComponent.module.css';
import Header from './Header';
import QuizQuestion from './QuizQuestion';

const QuizComponent = () => {
  return (
    <main className={styles.quizContainer}>
      <Header />
      <QuizQuestion />
    </main>
  );
};

export default QuizComponent;