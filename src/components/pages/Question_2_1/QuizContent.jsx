import React from 'react';
import styles from './QuizComponent.module.css';
import QuestionIndicator from './QuestionIndicator';
import Timer from './Timer';
import QuestionText from './QuestionText';
import OptionsContainer from './OptionsContainer';

const QuizContent = () => {
  return (
    <main className={styles.quizContent}>
      <div className={styles.quizHeader}>
        <QuestionIndicator />
        <Timer />
      </div>
      <QuestionText />
      <OptionsContainer />
      <button className={styles.nextButton}>Next Question</button>
    </main>
  );
};

export default QuizContent;