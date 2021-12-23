import React from 'react';
import styles from '../styles/Home.module.css';
import Home from '../components/Home';
import NextLink from 'next/link';
import Link from 'next/link';

const Layout = () => {
  return (
    <>
      <header>
        <Link href="/about">hello world</Link>
        <Link href="/Cart">Your Cart</Link>
        <Link href="/Login">Login</Link>
      </header>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>hello</footer>
    </>
  );
};

export default Layout;
