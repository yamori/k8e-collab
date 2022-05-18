import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>K8E Collab</title>
        <meta name="description" content="K8E Collab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/yamori/k8e-collab">K8E Collab</a>
        </h1>
      </main>
    </div>
  )
}
