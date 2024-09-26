import React from 'react';
import styles from './QuizComponent.module.css';
import QuestionOptions from './QuestionOptions';

function QuizContent() {
  return (
    <main className={styles.quizContent}>
      <div className={styles.quizHeader}>
        <div className={styles.questionNumber}>
          <div className={styles.questionLabel}>Question</div>
          <div className={styles.questionCount}>2/20</div>
        </div>
        <div className={styles.timer}>15</div>
      </div>
      <h2 className={styles.questionText}>
        Which of the following is used to initialize the state in React class component
      </h2>
      <QuestionOptions />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a08ddab3e86312a2bdabafec65e901d719b27469b2436e435c06ee1c4a5cb3a?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.hintIcon} alt="Hint icon" />
      <button className={styles.nextButton}>Next Question</button>
    </main>
  );
}

export default QuizContent;