// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='A few words about me'>
      <p>My name is Christina and I love cats</p>
    </Layout>
  )
}

export const Head = () => <Seo title='About Me' />

export default AboutPage