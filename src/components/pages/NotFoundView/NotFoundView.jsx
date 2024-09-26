import React from "react";
import styles from './NotFoundView.module.css';

function NotFoundView() {
  return (
    <main className={styles.notFoundView}>
      <section className={styles.contentWrapper} aria-label="Not Found Content">
      </section>
    </main>
  );
}

export default NotFoundView;