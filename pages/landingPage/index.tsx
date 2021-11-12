import Link from 'next/link';
import React from 'react';

import styles from '../../styles/Home.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts">
              <a>Go to About Page</a>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts">
              Go to About Page
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts" passHref>
              <div>
                Go to About Page
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage;