import React from 'react';
import QuizOption from './QuizOption';
import styles from './QuizComponent.module.css';

function QuizQuestion() {
  const options = [
    "Constructor",
    "None of the given options",
    "Component did mount",
    "Render",
    "Component will unmount"
  ];

  return (
    <section className={styles.quizContent}>
      <div className={styles.questionHeader}>
        <div className={styles.questionBadge}>
          <span className={styles.questionLabel}>Question</span>
          <span className={styles.questionNumber}>2/20</span>
        </div>
        <div className={styles.timer}>15</div>
      </div>
      <h2 className={styles.questionText}>
        Which of the following is used to initialize the state in React class component
      </h2>
      <form className={styles.optionsForm}>
        {options.map((option, index) => (
          <QuizOption key={index} option={option} />
        ))}
      </form>
      <button className={styles.nextButton}>Next Question</button>
    </section>
  );
}

export default QuizQuestion;