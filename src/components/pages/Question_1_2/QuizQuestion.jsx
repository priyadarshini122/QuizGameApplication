import React from 'react'
import styles from './QuizComponent.module.css'

const QuizQuestion = ({question, options}) => (
  <section className={styles.quizQuestion}>
    <h2 className={styles.questionText}>{question}</h2>
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <button key={index} className={styles.optionButton}>
          {option}
        </button>
      ))}
    </div>
  </section>
)

export default QuizQuestion
