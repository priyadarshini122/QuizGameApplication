import React from 'react'
import styles from './CongratsPage.module.css'
import Header from './Header'
import CongratsContent from './CongratsContent'

function CongratsPage() {
  return (
    <main className={styles.congratsPage}>
      <Header />
      <CongratsContent />
    </main>
  )
}

export default CongratsPage
