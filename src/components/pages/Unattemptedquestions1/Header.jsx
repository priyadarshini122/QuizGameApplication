import React from 'react';
import styles from './QuizResult.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0bb2bbbbad8977f821d7270112943ca8a12d209f02f2bbbd2d0879b40f78ee9?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
            alt="NXT Quiz Logo" 
            className={styles.logoIcon}
          />
          <span>NXT Quiz</span>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
}

export default Header;