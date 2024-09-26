import React from 'react'
import styles from './LoginPage.module.css'

function LoginPage() {
  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <form className={styles.loginForm}>
          <header className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f82acce80ca42dc105240c457f8ad46c41f252136a152ee59c4faedfdb372c1c?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf"
                className={styles.logoImage}
                alt="NXT Quiz Logo"
              />
              <h1 className={styles.logoText}>NXT Quiz</h1>
            </div>
          </header>
          <div className={styles.formFields}>
            <div className={styles.formWrapper}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="username" className={styles.inputLabel}>
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className={styles.inputField}
                    defaultValue="rahul"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="password" className={styles.inputLabel}>
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`${styles.inputField} ${styles.passwordField}`}
                    defaultValue="***********"
                  />
                </div>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="showPassword"
                  className={styles.checkbox}
                />
                <label htmlFor="showPassword" className={styles.checkboxLabel}>
                  Show Password
                </label>
              </div>
            </div>
            <button type="submit" className={styles.loginButton}>
              <div className={styles.buttonContent}>
                <span className={styles.buttonText}>Login</span>
              </div>
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
