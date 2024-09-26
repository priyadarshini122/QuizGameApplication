import React from 'react';
import styles from './QuizStyles.module.css';

const QuestionProgress = ({ current, total, timeLeft }) => (
  <div className={styles.progressContainer}>
    <div className={styles.questionCounter}>
      <span className={styles.questionLabel}>Question</span>
      <span className={styles.questionNumber}>{current}/{total}</span>
    </div>
    <div className={styles.timeLeft}>{timeLeft}</div>
  </div>
);

export default QuestionProgress;