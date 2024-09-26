import React from 'react';
import styles from './QuizComponent.module.css';

const QuizContent = () => {
  return (
    <main className={styles.quizContent}>
      <div className={styles.quizHeader}>
        <div className={styles.questionCounter}>
          <div className={styles.questionLabel}>Question</div>
          <div className={styles.questionNumber}>4/20</div>
        </div>
        <div className={styles.timer}>15</div>
      </div>
      <h2 className={styles.questionText}>
        What oil is used for cooking in South India?
      </h2>
      <div className={styles.answerOptions}>
        <div className={styles.answerOption}>
          <button className={`${styles.answerButton} ${styles.answerButtonFalse}`}>False</button>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/852fc0945d5caa00cc662d813d9d2be62fde1d4c5513243f9819581dd8fdac06?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.answerIcon} alt="" />
        </div>
        <div className={styles.answerOption}>
          <button className={`${styles.answerButton} ${styles.answerButtonTrue}`}>True</button>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddaea999ae5a2178bfe017e1a0fddd30678ff1903e3e7e8c463caeb3517afc3e?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.answerIcon} alt="" />
        </div>
      </div>
      <button className={styles.nextButton}>Next Question</button>
    </main>
  );
};

export default QuizContent;