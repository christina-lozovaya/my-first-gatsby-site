import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import { button } from './post.module.css'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Link className={button} to="/blog">Back to Blog List</Link>

      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage 
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <figcaption>
        <i>
          Image taken from this resource:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>go to resource site</a>
        </i>
      </figcaption>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
