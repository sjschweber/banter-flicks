import React from "react"
import { Link, StaticQuery, graphql} from "gatsby"
import Template from '../templates/blogTemplate.js'
import Feed from "../components/feed"
import Card from "../components/card"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Newest Posts</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Card showall='true'/>

    </div>
  </Layout>



)

export default IndexPage
