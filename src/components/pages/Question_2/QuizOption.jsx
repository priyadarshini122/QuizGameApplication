import React from 'react';
import styles from './QuizComponent.module.css';

function QuizOption({ option }) {
  return (
    <div className={styles.optionContainer}>
      <input type="radio" id={`option-${option}`} name="quizOption" className={styles.optionInput} />
      <label htmlFor={`option-${option}`} className={styles.optionLabel}>
        {option}
      </label>
    </div>
  );
}

export default QuizOption;