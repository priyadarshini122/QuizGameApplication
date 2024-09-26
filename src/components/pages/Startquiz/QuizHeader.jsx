import React from 'react';
import styles from './QuizStyles.module.css';

const QuizHeader = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a393ac3aac799419ed58c488b103f6bc56a33a16c3199bc376ecf1e9a8bcf3?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="NXT Quiz Logo" className={styles.logoImage} />
        <span className={styles.logoText}>NXT Quiz</span>
      </div>
      <button className={styles.logoutButton}>
        <span className={styles.logoutText}>Logout</span>
      </button>
    </div>
  </header>
);

export default QuizHeader;