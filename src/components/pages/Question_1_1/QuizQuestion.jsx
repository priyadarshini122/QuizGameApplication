import React from 'react';
import styles from './QuizComponent.module.css';

const QuizQuestion = () => {
  const answerOptions = [
    { id: 'a', text: 'Coconut oil', isCorrect: true },
    { id: 'b', text: 'Sunflower oil', isCorrect: false },
    { id: 'c', text: 'Olive oil', isCorrect: false },
    { id: 'd', text: 'None of these', isCorrect: false },
  ];

  return (
    <section>
      <div className={styles.quizHeader}>
        <div className={styles.questionCounter}>
          <div className={styles.questionLabel}>Question</div>
          <div className={styles.questionNumber}>1/20</div>
        </div>
        <div className={styles.timer}>15</div>
      </div>
      <h2 className={styles.questionText}>
        What oil is used for cooking in South India?
      </h2>
      <div className={styles.answerOptions}>
        {answerOptions.map((option) => (
          <div key={option.id} className={styles.answerOption}>
            <button
              className={`${styles.answerText} ${
                option.isCorrect ? styles.correctAnswer : styles.incorrectAnswer
              }`}
            >
              {option.text}
            </button>
            {option.isCorrect && (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/905c0d6ba9f5b52f5713f84cc9cb779dee846d80627c1a725a4ea90b71f93793?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf"
                className={styles.checkIcon}
                alt="Correct answer"
              />
            )}
          </div>
        ))}
      </div>
      <button className={styles.nextButton}>Next Question</button>
    </section>
  );
};

export default QuizQuestion;