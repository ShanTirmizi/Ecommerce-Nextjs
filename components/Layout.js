import React from 'react';
import styles from '../styles/Home.module.css';
import Home from '../components/Home';

const Layout = () => {
  return (
    <>
      <header>hello</header>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>hello</footer>
    </>
  );
};

export default Layout;
