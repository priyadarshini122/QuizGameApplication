import React from 'react';
import styles from './LoginForm.module.css';
import InputField from './InputField';
import Button from './Button';

const LoginForm = () => {
  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <header className={styles.loginHeader}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/018dc020396f5673a6e43cb282b5f923e4ffe6672059feb0ba9b5e401a9f57a3?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" alt="NXT Quiz Logo" className={styles.logo} />
          <h1 className={styles.appTitle}>NXT Quiz</h1>
        </header>
        <form className={styles.loginForm}>
          <InputField label="Username" type="text" value="rahul" />
          <InputField label="Password" type="password" value="***********" />
          <label className={styles.showPasswordLabel}>
            <input type="checkbox" className={styles.showPasswordCheckbox} />
            <span>Show Password</span>
          </label>
          <Button>Login</Button>
          <p className={styles.errorMessage}>Please enter a valid Username & Password</p>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;