import React from 'react';
import styles from './LoginForm.module.css';

const Button = ({ children }) => (
  <button className={styles.submitButton}>
    <span className={styles.buttonText}>{children}</span>
  </button>
);

export default Button;