import React from 'react';
import styles from './QuizComponent.module.css';

const options = [
  { id: 'constructor', text: 'Constructor', isSelected: false },
  { id: 'none', text: 'None of the given options', isSelected: true },
  { id: 'componentDidMount', text: 'Component did mount', isSelected: false },
  { id: 'render', text: 'Render', isSelected: false },
  { id: 'componentWillUnmount', text: 'Component will unmount', isSelected: false }
];

function QuestionOptions() {
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.optionsList}>
        {options.map((option) => (
          <div key={option.id} className={styles.optionItem}>
            <div className={`${styles.optionRadio} ${option.isSelected ? styles.selectedOption : ''}`} />
            <div className={styles.optionText}>{option.text}</div>
          </div>
        ))}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/35be6b6b4c557b5b6830631b4445c16c757d9eb24564eb5c65c4d9c8ad547387?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.feedbackIcon} alt="Feedback icon" />
      </div>
    </div>
  );
}

export default QuestionOptions;