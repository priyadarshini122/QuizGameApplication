import React from 'react';
import QuizOption from './QuizOption';
import styles from './QuizStyles.module.css';

const QuizQuestion = ({ question, options }) => (
  <section className={styles.questionSection}>
    <h2 className={styles.questionText}>{question}</h2>
    <div className={styles.optionsGrid}>
      {options.map((option, index) => (
        <QuizOption
          key={index}
          label={option.text}
          isCorrect={option.isCorrect}
          isSelected={option.isSelected}
        />
      ))}
    </div>
  </section>
);

export default QuizQuestion;