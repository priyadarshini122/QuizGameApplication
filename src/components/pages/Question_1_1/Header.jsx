import React from 'react';
import styles from './QuizComponent.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7037fa377b8cd373d6d58aa215deb24e7640feb1ecd2749e6bc2cdb87006e60f?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoIcon} alt="" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
};

export default Header;