import React from 'react';
import styles from './QuizComponent.module.css';
import Header from './Header';
import QuestionCard from './QuestionCard';
import AnswerOption from './AnswerOption';

function QuizComponent() {
  const answerOptions = [
    { id: 1, content: 'Option 1' },
    { id: 2, content: 'Option 2' },
    { id: 3, content: 'Option 3' },
    { id: 4, content: 'Option 4' }
  ];

  return (
    <main className={styles.quizContainer}>
      <Header />
      <section className={styles.quizContent}>
        <QuestionCard
          questionNumber={3}
          totalQuestions={20}
          timeLeft={15}
          question="Which of the following is used to initialize the state in React class component"
        />
        <div className={styles.answerGrid}>
          {answerOptions.map((option) => (
            <AnswerOption key={option.id} content={option.content} />
          ))}
        </div>
        <button className={styles.nextButton}>Next Question</button>
      </section>
    </main>
  );
}

export default QuizComponent;