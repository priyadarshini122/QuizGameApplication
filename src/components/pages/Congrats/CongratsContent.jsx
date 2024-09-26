import React from 'react'
import styles from './CongratsPage.module.css'

function CongratsContent() {
  return (
    <section className={styles.mainContent}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6931a2fc857697dae4fc56ffd7199007e037c03c40b9b1c04c781dfd8ac90b3?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf"
        className={styles.backgroundImage}
        alt=""
      />
      <div className={styles.congratsContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dca62873adfdde1d74c502f17f11ea7cf14d9afebfb426c4f20c4c650ee2846?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf"
          className={styles.trophyImage}
          alt="Trophy"
        />
        <h1 className={styles.congratsTitle}>Congrats!</h1>
        <p className={styles.scoreText}>90% Correctly Answered</p>
        <p className={styles.successMessage}>Quiz completed successfully.</p>
        <p className={styles.attemptDetails}>
          You attempted 9 out of 10 questions as correct.
        </p>
        <button className={styles.reportButton}>Report</button>
      </div>
    </section>
  )
}

export default CongratsContent
