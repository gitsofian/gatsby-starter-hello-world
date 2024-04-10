import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from "../styles/project-details.module.css"
import { graphql } from 'gatsby'

export default function ProjectDetails({data}) {

  const {html} = data.markdownRemark
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter
  console.log("featured: ",featuredImg)

  return (
  <div>
    <Layout>
      <div className={styles.details}>
        <h2 className="">{title}</h2>
        <h3 className="">{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt='test'/>
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </Layout>
  </div>
  )
}

export const query = graphql`

  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              webpOptions: {quality: 10}
              layout: FULL_WIDTH
              quality: 10
            )
          }
        }
      }
    }
  }
`