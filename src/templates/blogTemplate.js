import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { graphql } from "gatsby"
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const thumb = '../public'+frontmatter.thumbnail
  return (
    <Layout>
      <div style={{display: 'flex', 'flex-direction': 'column', 'justify-content': 'center'}}>

        <div style={{position: 'relative', 'justify-content': 'center'}}>

          <div style={{position:'absolute', bottom: '0%', 'background-color': '#ffffff', opacity: '0.6'}}>
            <Typography variant='caption'>
              {frontmatter.date}
            </Typography>
            <Typography>
              {frontmatter.author}
            </Typography>

            <Typography variant='h1'>
              {frontmatter.title}
            </Typography>
          </div>

          <CardMedia style={{height: '40vh', width: '50vw', 'align-self': 'center'}} image={data.markdownRemark.frontmatter.thumbnail}/>

        </div>
        <div
          className="blog-post-content"
          style={{"text-align": 'left', padding: '25px'}}
          dangerouslySetInnerHTML={{ __html: html }}
        />


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
        thumbnail
      }
    }
  }
`
