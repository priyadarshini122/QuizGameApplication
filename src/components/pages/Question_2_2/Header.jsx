import React from 'react';
import styles from './QuizComponent.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fafd35f06ed754f380c6ac02bb345a87393775faabf5ea79e6dc13e7baaae48?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz logo" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <button className={styles.logoutButton}>
          <div className={styles.logoutButtonInner}>
            <div className={styles.logoutText}>Logout</div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;