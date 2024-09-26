import React from 'react';
import styles from './QuizStartPage.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9a7f6956811c3527785f408d09d89a130e05de251dc54b4c24daca60ad68dd?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoIcon} alt="NXT Quiz logo" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <button className={styles.logoutButton}>
          <div className={styles.logoutButtonInner}>
            <span className={styles.logoutText}>Logout</span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;