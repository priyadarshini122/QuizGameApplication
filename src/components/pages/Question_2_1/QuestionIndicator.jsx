import React from 'react';
import styles from './QuizComponent.module.css';

const QuestionIndicator = () => {
  return (
    <div className={styles.questionIndicator}>
      <div className={styles.questionLabel}>Question</div>
      <div className={styles.questionNumber}>2/20</div>
    </div>
  );
};

export default QuestionIndicator;