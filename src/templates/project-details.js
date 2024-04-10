import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails() {

  return (
  <div>
    <Layout>
      <div className={styles.details}>
        <h2 className="">Title</h2>
        <h3 className="">Stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage image={getImage()} alt=''/> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={}></div> */}
      </div>
    </Layout>
  </div>
  )
}
