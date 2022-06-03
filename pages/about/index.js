import useSWR from 'swr'
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Page</h1>
        <p>... just trying to learn some NextJS.</p>
        <p><b>Goals and motivation:</b></p>
        <Profile />
      </div>
    </Layout>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('../api/profile', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      <li>Stack: {data.stack}</li>
      <li>CI: {data.ci}</li>
      <li>Hosting: {data.hosting}</li>
      <li>Product: {data.product}</li>
    </ul>
  )
}