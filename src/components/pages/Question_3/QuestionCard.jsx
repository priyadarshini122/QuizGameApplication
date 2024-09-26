import React from 'react';
import styles from './QuizComponent.module.css';

function QuestionCard({ questionNumber, totalQuestions, timeLeft, question }) {
  return (
    <article className={styles.questionCard}>
      <div className={styles.questionMeta}>
        <span className={styles.questionCounter}>
          Question
          <span className={styles.questionNumber}>{questionNumber}/{totalQuestions}</span>
        </span>
        <span className={styles.timeLeft}>{timeLeft}</span>
      </div>
      <h2 className={styles.questionText}>{question}</h2>
    </article>
  );
}

export default QuestionCard;