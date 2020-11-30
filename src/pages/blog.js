import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => {
      const { path, title, date, author } = post.node.frontmatter
      return (
        <div key={post.node.id}>
          <h3>{title}</h3>
          <small>
            Posted by {author} on {date}
          </small>
          <br />
          <br />
          <Link to={path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
