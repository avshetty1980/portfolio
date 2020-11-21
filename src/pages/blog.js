import React from "react"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
   data: {
     allStrapiBlogs:{nodes:blogs},
        }
       }) => {
  return (
  <section className="blog-page">
    <Blogs blogs={blogs} title="blog" />
  </section>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        date(formatString: "Do MMM, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
