import React from "react"
import Title from "./Title"
import Layout from "../components/Layout"
import Blog from "./Blog"
import { Link } from "gatsby"


export const Blogs = ({ title, blogs, showLink}) => {
  return (
    <Layout>
  <section className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {blogs.map((blog) => {
        return(
          <Blog key={blog.id} {...blog} />
        )
      })}
    </div>
      {showLink && <Link to="/blog" className="btn center-btn">Blog</Link>}
  </section>
  </Layout>

  )
}
export default Blogs
