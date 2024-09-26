import React from 'react';
import styles from './QuizComponent.module.css';

const QuizComponent = () => {
  return (
    <main className={styles.quizContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa1d5fefe0537afb63ed98621a52f08aee88fcc995fcf578952d4a2c14d8fde?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz Logo" />
          <div className={styles.logoText}>NXT Quiz</div>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </header>
      
      <section className={styles.quizContent}>
        <div className={styles.quizHeader}>
          <div className={styles.questionInfo}>
            <div className={styles.questionLabel}>Question</div>
            <div className={styles.questionNumber}>4/20</div>
          </div>
          <div className={styles.timer}>15</div>
        </div>
        
        <h2 className={styles.questionText}>
          What oil is used for cooking in South India?
        </h2>
        
        <form className={styles.answerOptions}>
          <label className={styles.visually-hidden} htmlFor="false-option">False</label>
          <input type="radio" id="false-option" name="answer" className={styles.visually-hidden} />
          <span className={styles.answerOption} tabIndex="0" role="button">False</span>

          <label className={styles.visually-hidden} htmlFor="true-option">True</label>
          <input type="radio" id="true-option" name="answer" className={styles.visually-hidden} />
          <span className={styles.answerOption} tabIndex="0" role="button">True</span>
        </form>
        
        <button className={styles.nextButton}>Next Question</button>
      </section>
    </main>
  );
};

export default QuizComponent;