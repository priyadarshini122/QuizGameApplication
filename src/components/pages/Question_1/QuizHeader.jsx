import React from 'react';
import styles from './QuizStyles.module.css';

const QuizHeader = () => (
  <header className={styles.quizHeader}>
    <div className={styles.logoContainer}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d888202d7d920cc452fcc02a6e54e057df8c3acc4993adf6ee7f1edce95c103b?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz Logo" />
      <h1 className={styles.logoText}>NXT Quiz</h1>
    </div>
    <button className={styles.logoutButton}>
      <span className={styles.logoutText}>Logout</span>
    </button>
  </header>
);

export default QuizHeader;