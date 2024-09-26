import React from 'react';
import styles from './QuizComponent.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/febe634f66ee19a753031682787e0a967c697128e612eca51f8d3b6228e6b654?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logoImage} alt="NXT Quiz Logo" />
        <div className={styles.logoText}>NXT Quiz</div>
      </div>
      <button className={styles.logoutButton}>Logout</button>
    </div>
  </header>
);

const QuizHeader = ({ currentQuestion, totalQuestions, timeLeft }) => (
  <div className={styles.quizHeader}>
    <div className={styles.questionCounter}>
      <div className={styles.questionLabel}>Question</div>
      <div className={styles.questionNumber}>{currentQuestion}/{totalQuestions}</div>
    </div>
    <div className={styles.timer}>{timeLeft}</div>
  </div>
);

const AnswerOption = () => (
  <div className={styles.answerOption}>
    <div className={styles.optionContent}>
      <div className={styles.optionBox}>
        <div className={styles.optionInner}>
          <div className={styles.optionDots}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const QuizComponent = () => {
  return (
    <section className={styles.quizContainer}>
      <Header />
      <QuizHeader currentQuestion={3} totalQuestions={20} timeLeft={15} />
      <h2 className={styles.questionText}>
        Which of the following is used to initialize the state in React class component
      </h2>
      <div className={styles.answerOptions}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </div>
      <button className={styles.nextButton}>Next Question</button>
    </section>
  );
};

export default QuizComponent;