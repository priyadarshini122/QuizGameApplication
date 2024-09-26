import React from "react";
import styles from './QuizResult.module.css';

const QuizResult = () => {
  return (
    <main className={styles.quizResult}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4732950af094f214d84c636a13920b93892cbf7a6d6ca4b7972b7becff9aa97e?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
              className={styles.logoIcon} 
              alt="NXT Quiz logo" 
            />
            <div className={styles.logoText}>NXT Quiz</div>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </header>
      <section className={styles.resultContainer}>
        <div className={styles.resultContent}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55502aed49e8ddbb60024b91536b7708997bb0836e505d62e07ba569deecf3e3?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
            className={styles.resultImage} 
            alt="Quiz result illustration" 
          />
          <h1 className={styles.resultTitle}>You lose!</h1>
          <p className={styles.resultPercentage}>30% Correctly Answered</p>
          <p className={styles.resultDescription}>
            You attempted 3 out of 10 questions as correct.
          </p>
          <button className={styles.reportButton}>Report</button>
        </div>
      </section>
    </main>
  );
};

export default QuizResult;