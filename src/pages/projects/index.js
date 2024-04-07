import React from 'react'
import Layout from '../../components/layout'
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from 'gatsby'

// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  // const images = getImage(data.projects.nodes.childImageSharp.gatsbyImageData)

  return (
    <Layout>
        <div className={styles.portfolio}>
          <h1>Portfolio home page!</h1>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="test"/>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see? Email: {contact} for a quote!</p>
        </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
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
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`