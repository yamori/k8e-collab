import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/yamori/k8e-collab">K8E Collab</a>
        </h1>
      </main>
    </div>
    </Layout>
  )
}

