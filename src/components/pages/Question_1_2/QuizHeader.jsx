import React from 'react'
import styles from './QuizComponent.module.css'

const QuizHeader = () => (
  <header className={styles.quizHeader}>
    <div className={styles.logoContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2fbf304180e20b4591e83d231f033182d9c04c6f2a4ae1af396ce1ed41c28e8?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf"
        className={styles.logoImage}
        alt="NXT Quiz Logo"
      />
      <h1 className={styles.logoText}>NXT Quiz</h1>
    </div>
    <button className={styles.logoutButton}>
      <span className={styles.logoutText}>Logout</span>
    </button>
  </header>
)

export default QuizHeader
