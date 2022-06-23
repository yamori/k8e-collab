import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <form action="/api/form" method="post">
          <div class="mb-3">
            <label for="first" class="form-label">First name:</label>
            <input type="text" class="form-control" id="first" name="first" />
          </div>
          <div class="mb-3">
            <label for="last" class="form-label">Last name:</label>
            <input type="text" class="form-control" id="last" name="last" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
            <div id="emailHelp" class="form-text">We'll never share your email. In fact, this form isn't even hooked up to a database!</div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  )
}