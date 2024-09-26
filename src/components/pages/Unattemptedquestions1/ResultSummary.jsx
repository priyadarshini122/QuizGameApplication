import React from 'react';
import styles from './QuizResult.module.css';

function ResultSummary() {
  const resultDetails = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b691b1c65a32b34310409fa1bea3e663b5873b6212bd75a57364b21e0b1c2b4?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf", text: "5 Correct answers" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5e04fa58c86fa66f8e271094eb9c9fec7978b54325fc50ad158c031e6641a2e?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf", text: "5 Wrong answers" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e76b97addcec0fc8af651492c75009ac2ae3ff670218b23cc1e8d0f3a899e6a?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf", text: "0 Unattempted" }
  ];

  return (
    <section className={styles.resultSummary}>
      <div className={styles.scoreCircle}>
        <span>10</span>
        <span className={styles.visually-hidden}>out of</span>
        <span>10</span>
      </div>
      <div className={styles.scoreDetails}>
        {resultDetails.map((detail, index) => (
          <div key={index} className={styles.detailItem}>
            <img 
              src={detail.icon} 
              alt="" 
              className={styles.detailIcon}
            />
            <span>{detail.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResultSummary;