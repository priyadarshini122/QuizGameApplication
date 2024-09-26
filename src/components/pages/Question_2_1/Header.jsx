import React from 'react';
import styles from './QuizComponent.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0c08dbe4189b35a817db0f235d5e87c9a3f2eefd3fecf954ccdeabb156d9fad?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz logo" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <div className={styles.logoutButton}>
          <div className={styles.logoutButtonInner}>
            <div className={styles.logoutText}>Logout</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;