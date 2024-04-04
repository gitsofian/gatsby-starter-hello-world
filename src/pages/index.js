import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home({data}) {


  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web developer based in Celle.</p>
          <Link className={styles.btn} to="/projects">My Profolio Project</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: "100%"}}/>
      </section>
    </Layout>
  )
}
