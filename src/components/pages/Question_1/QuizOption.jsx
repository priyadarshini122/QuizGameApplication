import React from 'react';
import styles from './QuizStyles.module.css';

const QuizOption = ({ label, isCorrect, isSelected }) => {
  const optionClass = isCorrect && isSelected ? styles.correctOption :
                      isSelected ? styles.incorrectOption :
                      styles.defaultOption;

  return (
    <button className={optionClass}>
      {label}
      {isCorrect && isSelected && (
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/905c0d6ba9f5b52f5713f84cc9cb779dee846d80627c1a725a4ea90b71f93793?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.correctIcon} alt="" />
      )}
      {!isCorrect && isSelected && (
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a08ddab3e86312a2bdabafec65e901d719b27469b2436e435c06ee1c4a5cb3a?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.incorrectIcon} alt="" />
      )}
    </button>
  );
};

export default QuizOption;