import React from 'react';
import styles from './QuizComponent.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a067cf10cbda287075dad2d09d5325e93d0cb806c39ef740d7d819d8a45a7ea?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="NXT Quiz Logo" className={styles.logoImage} />
          <span className={styles.logoText}>NXT Quiz</span>
        </div>
        <button className={styles.logoutButton}>
          <span className={styles.logoutText}>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Header;