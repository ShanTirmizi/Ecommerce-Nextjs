import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import data from '../utils/data';

export default function Home() {
  console.log(data.products);
  return <Layout />;
}
