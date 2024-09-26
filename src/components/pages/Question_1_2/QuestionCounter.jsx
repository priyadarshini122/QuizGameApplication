import React from 'react'
import styles from './QuizComponent.module.css'

const QuestionCounter = ({current, total, timeLeft}) => (
  <div className={styles.questionCounter}>
    <div className={styles.counterWrapper}>
      <p className={styles.counterLabel}>Question</p>
      <p className={styles.counterValue}>
        {current}/{total}
      </p>
    </div>
    <div className={styles.timeLeft}>{timeLeft}</div>
  </div>
)

export default QuestionCounter
