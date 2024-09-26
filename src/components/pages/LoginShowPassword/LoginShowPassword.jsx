import React from 'react';
import styles from './LoginShowPassword.module.css';

const LoginShowPassword = () => {
  return (
    <main className={styles.container}>
      <section className={styles.loginCard}>
        <div className={styles.formContainer}>
          <header className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ede96e38b643b789c853fc31072cebc355bc92539354d42e3d9a040e00d0df7?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.logo} alt="NXT Quiz logo" />
              <h1 className={styles.logoText}>NXT Quiz</h1>
            </div>
          </header>
          <div className={styles.formWrapper}>
            <form className={styles.formInner}>
              <div className={styles.formFields}>
                <div className={styles.inputGroup}>
                  <label htmlFor="username" className={styles.inputLabel}>Username</label>
                  <input id="username" type="text" className={styles.inputField} defaultValue="rahul" />
                </div>
                <div className={styles.passwordGroup}>
                  <label htmlFor="password" className={styles.passwordLabel}>Password</label>
                  <input id="password" type="password" className={styles.passwordField} defaultValue="rahul@2021" />
                </div>
              </div>
              <button type="button" className={styles.showPasswordButton}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ba427b73a61659854b6420215164a33003e8215d5d65165da7ad2f712ec2ea?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" className={styles.showPasswordIcon} alt="" />
                <span className={styles.showPasswordText}>Show Password</span>
              </button>
            </form>
            <button type="submit" className={styles.loginButton}>
              <div className={styles.loginButtonInner}>
                <span className={styles.loginButtonText}>Login</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginShowPassword;