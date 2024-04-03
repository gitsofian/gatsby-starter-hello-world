import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import {graphql, Link } from "gatsby"

export default function Home({data}) {
  console.log(data)
  const {title, description, copyright} = data.site.siteMetadata
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
        <p>{title} - {description}</p>
      </section>
    </Layout>
  )
}
export const query = graphql `
  query SiteInfo {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`