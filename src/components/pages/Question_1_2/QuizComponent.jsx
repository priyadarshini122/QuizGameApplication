import React from 'react'
import QuizHeader from './QuizHeader'
import QuestionCounter from './QuestionCounter'
import QuizQuestion from './QuizQuestion'
import styles from './QuizComponent.module.css'

const QuizComponent = () => {
  const questionOptions = [
    'A. Coconut oil',
    'B. Sunflower oil',
    'C. Olive oil',
    'D. None of these',
  ]

  return (
    <main className={styles.quizContainer}>
      <QuizHeader />
      <section className={styles.quizContent}>
        <QuestionCounter current={1} total={20} timeLeft={15} />
        <QuizQuestion
          question="What oil is used for cooking in South India?"
          options={questionOptions}
        />
        <button className={styles.nextButton}>Next Question</button>
      </section>
    </main>
  )
}

export default QuizComponent
