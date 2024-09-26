import React from 'react';
import styles from './QuizComponent.module.css';

function AnswerOption({ content }) {
  return (
    <div className={styles.answerOption}>
      <div className={styles.answerContent}>
        <div className={styles.optionIndicator}>
          <div className={styles.outerCircle}>
            <div className={styles.innerCircle} />
          </div>
          <div className={styles.optionLine}>
            <div className={styles.lineCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerOption;