import React from 'react';
import styles from './QuizStyles.module.css';

const QuizIntro = () => (
  <section className={styles.introSection}>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f702652dbe1ebb275ca5ef7ce8aee2b697ce3794befb2d8209aa50e670101fa?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="Quiz illustration" className={styles.introImage} />
    <h1 className={styles.introTitle}>How Many Of These Questions Do You Actually Know?</h1>
    <p className={styles.introDescription}>Test yourself with these easy quiz questions and answers</p>
    <button className={styles.startButton}>Start Quiz</button>
  </section>
);

export default QuizIntro;