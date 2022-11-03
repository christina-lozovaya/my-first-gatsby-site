// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='A few words about me'>
      <p>My name is Christina and I love cats</p>
      <StaticImage 
          alt='CatWoman'
          src='../images/catwoman.jfif'
        />
        <figcaption><i>Hi, there!</i></figcaption>
    </Layout>
  )
}

export const Head = () => <Seo title='About Me' />

export default AboutPage