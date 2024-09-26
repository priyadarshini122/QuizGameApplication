import React from 'react';
import QuizHeader from './QuizHeader';
import QuizIntro from './QuizIntro';
import AlertMessage from './AlertMessage';
import styles from './QuizStyles.module.css';

const QuizPage = () => (
  <div className={styles.quizContainer}>
    <QuizHeader />
    <main className={styles.mainContent}>
      <QuizIntro />
      <AlertMessage />
    </main>
  </div>
);

export default QuizPage;