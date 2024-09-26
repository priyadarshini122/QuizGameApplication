import React from 'react';
import styles from './QuizComponent.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a702195512362cf82284e6479a277feb41b44e7b684b3cbbbb0acbbd1dab027?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz logo" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
};

export default Header;