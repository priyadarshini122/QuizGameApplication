import React from 'react';
import styles from './QuizStartPage.module.css';

function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55db9876f1c93ea880fc047bf3e8f55c19dba793d4f4646257eb03807007ae1?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.quizImage} alt="Quiz illustration" />
        <h1 className={styles.quizTitle}>
          How Many Of These Questions Do You Actually Know?
        </h1>
        <p className={styles.quizDescription}>
          Test yourself with these easy quiz questions and answers
        </p>
        <div className={styles.startButton}>
          <button className={styles.startButtonInner}>
            <span className={styles.startButtonText}>Start Quiz</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainContent;