import * as React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web developer based in Celle.</p>
        </div>
      </section>
    </Layout>
  )
}
