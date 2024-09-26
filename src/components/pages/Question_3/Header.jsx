import React from 'react';
import styles from './QuizComponent.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbfe12d8c0ccb55ddab7d1ac54863c8dfbf57441924ddc4d5fa0a896019b5447?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="NXT Quiz Logo" className={styles.logoImage} />
        <span className={styles.logoText}>NXT Quiz</span>
      </div>
      <button className={styles.logoutButton}>Logout</button>
    </header>
  );
}

export default Header;