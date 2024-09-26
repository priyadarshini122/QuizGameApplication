import React from 'react';
import styles from './QuizStyles.module.css';

const AlertMessage = () => (
  <div className={styles.alertContainer}>
    <div className={styles.alertContent}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7fefe81a7ea26b1e323e370362b7c77b22e194872604991ca58956a49e0a7fa?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="" className={styles.alertIcon} />
      <p className={styles.alertText}>
        All the progress will be lost, if you reload during the quiz
      </p>
    </div>
  </div>
);

export default AlertMessage;