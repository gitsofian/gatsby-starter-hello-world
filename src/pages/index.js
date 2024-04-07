import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data)
  const img_banner = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web developer based in Celle.</p>
          <Link className={styles.btn} to="/projects">My Profolio Project</Link>
        </div>
        <GatsbyImage image={img_banner} alt="banner"/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED, 
          formats: AUTO, 
          webpOptions: {quality: 10}
        )
      }
    }
  }
`
