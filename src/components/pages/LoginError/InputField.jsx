import React from 'react';
import styles from './LoginForm.module.css';

const InputField = ({ label, type, value }) => (
  <div className={styles.inputWrapper}>
    <label className={styles.inputLabel}>{label}</label>
    <input type={type} className={styles.inputField} value={value} />
  </div>
);

export default InputField;