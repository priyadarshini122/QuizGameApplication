import React from "react";
import styles from './ErrorPage.module.css';
import Header from './Header';

function ErrorPage() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.mainContent}>
        <div className={styles.errorContainer}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f370f71b58327e815d49cdb9a761b160d56168ff11e4d725afe1cf22547bbf9e?placeholderIfAbsent=true&apiKey=7338e85b81d84494a6dacff43882e3bf" 
            className={styles.errorImage} 
            alt="Error illustration"
          />
          <h1 className={styles.errorTitle}>Something went wrong</h1>
          <p className={styles.errorMessage}>
            Our servers are busy please try again
          </p>
          <button className={styles.retryButton}>Retry</button>
        </div>
      </section>
    </main>
  );
}

export default ErrorPage;