import React from 'react';
import styles from './QuizResult.module.css';
import Header from './Header';
import ResultSummary from './ResultSummary';

function QuizResult() {
  return (
    <main className={styles.mainContent}>
      <Header />
      <ResultSummary />
      <section className={styles.completionMessage}>
        Attempted all the questions
      </section>
    </main>
  );
}

export default QuizResult;