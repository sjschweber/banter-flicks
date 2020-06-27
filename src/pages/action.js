import React from "react"
import { Link, StaticQuery, graphql} from "gatsby"
import Template from '../templates/blogTemplate.js'
import Feed from "../components/feed"
import Card from "../components/card"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Action = () => (
  <Layout>
    <SEO title="Action" />
    <h1 style={{'text-align': 'center'}}>Everyone's A Critic</h1>

      <Card page="action" showall="false"/>


  </Layout>



)

export default Action
