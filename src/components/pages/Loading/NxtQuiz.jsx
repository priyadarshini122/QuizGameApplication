import React from 'react';
import styles from './NxtQuiz.module.css';

const NxtQuiz = () => {
  return (
    <div className={styles.loading}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f339357bc3ff6db9d60ec1f2695f975615af89e1e238ccde5df38cf853aee?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
              alt="NXT Quiz Logo" 
              className={styles.logoIcon} 
            />
            <span className={styles.logoText}>NXT Quiz</span>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </header>
      <main className={styles.mainContent}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf5d38d64359a6a0dbf3dd72479107ba7644aaa8ad95fddf7cff5e8aa45f8a8?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
          alt="Content Icon" 
          className={styles.contentIcon} 
        />
      </main>
    </div>
  );
};

export default NxtQuiz;
