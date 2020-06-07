import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Paper from '@material-ui/core/Paper';

import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
      <div className="blog-post">
        <h1 style={{color: 'blue'}}>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <h5>{frontmatter.author}</h5>
        <Paper elevation={10}>
        <div
          className="blog-post-content"
          style={{"text-align": 'center'}}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </Paper>
      </div>

    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        genre
        author
      }
    }
  }
`
