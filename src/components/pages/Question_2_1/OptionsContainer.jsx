import React from 'react'
import styles from './QuizComponent.module.css'

const options = [
  'Constructor',
  'None of the given options',
  'Component did mount',
  'Render',
  'Component will unmount',
]

const OptionsContainer = () => {
  return (
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <div key={index} className={styles.optionItem}>
          <div
            className={`${styles.optionRadio} ${
              index === 0 ? styles.selectedOption : ''
            }`}
          />
          <div className={styles.optionText}>{option}</div>
        </div>
      ))}
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/35be6b6b4c557b5b6830631b4445c16c757d9eb24564eb5c65c4d9c8ad547387?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf'
        className={styles.checkIcon}
        alt=''
      />
    </div>
  )
}

export default OptionsContainer
