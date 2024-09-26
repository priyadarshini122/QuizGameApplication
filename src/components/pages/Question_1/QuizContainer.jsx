import React from 'react';
import QuizHeader from './QuizHeader';
import QuestionProgress from './QuestionProgress';
import QuizQuestion from './QuizQuestion';
import styles from './QuizStyles.module.css';

const QuizContainer = () => {
  const questionData = {
    question: "What oil is used for cooking in South India?",
    options: [
      { text: "A. Coconut oil", isCorrect: true, isSelected: true },
      { text: "B. Sunflower oil", isCorrect: false, isSelected: false },
      { text: "C. Olive oil", isCorrect: false, isSelected: false },
      { text: "D. None of these", isCorrect: false, isSelected: false }
    ]
  };

  return (
    <main className={styles.quizContainer}>
      <QuizHeader />
      <div className={styles.quizContent}>
        <QuestionProgress current={1} total={20} timeLeft={15} />
        <QuizQuestion question={questionData.question} options={questionData.options} />
        <button className={styles.nextButton}>Next Question</button>
      </div>
    </main>
  );
};

export default QuizContainer;