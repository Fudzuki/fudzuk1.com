import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fudzuki</title>
        <meta name="description" content="Fudzuki's site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fudzuki ^^
        </h1>
      </main>

      <footer className={styles.footer}>
          &copy; 2022 Fudzuki
      </footer>
    </div>
  )
}
