import React from "react";
import styles from './ErrorPage.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e58a723aba30a941f5dcb81070d3864b1106399682156672369adee036a34b1c?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
            className={styles.logoIcon} 
            alt="NXT Quiz logo"
          />
          <span className={styles.logoText}>NXT Quiz</span>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
}

export default Header;