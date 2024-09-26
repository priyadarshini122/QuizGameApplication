import React from "react";
import styles from './CongratsPage.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c04fc1f80ef720d4a63be5dc8229717634cd7ec2357d0d0c541cfd885abf3f2?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz logo" />
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