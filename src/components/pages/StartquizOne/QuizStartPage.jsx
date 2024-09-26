import React from 'react';
import styles from './QuizStartPage.module.css';
import Header from './Header';
import MainContent from './MainContent';

function QuizStartPage() {
  return (
    <main className={styles.startQuiz}>
      <Header />
      <MainContent />
    </main>
  );
}

export default QuizStartPage;