import React from 'react';
import styles from './QuizComponent.module.css';

const QuizComponent = () => {
  return (
    <main className={styles.quizContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eed8593522750cdac46d6a73ee688a55522c59495a2de1e23b0da1a7784f7ef0?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz Logo" />
            <div className={styles.logoText}>NXT Quiz</div>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </header>
      <section className={styles.quizContainer}>
        <div className={styles.quizHeader}>
          <div className={styles.questionNumber}>
            <div className={styles.questionLabel}>Question</div>
            <div className={styles.questionCount}>4/20</div>
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
          <button className={`${styles.answerButton} ${styles.answerButtonTrue}`}>True</button>
        </div>
        <button className={styles.nextButton}>Next Question</button>
      </section>
    </main>
  );
};

export default QuizComponent;