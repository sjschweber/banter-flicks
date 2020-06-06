import React from "react"
import { Link, StaticQuery, graphql} from "gatsby"
import { createStore } from 'redux'
import {Carousel} from '../components/carasoul.js'
import imageReducer from '../reducers/index.js'
import Template from '../templates/blogTemplate.js'
import Feed from "../components/feed"
import Card from "../components/card"
import Layout from "../components/layout"
import Image from "../components/image"
import ScrollList from "../components/scroll-list"

import SEO from "../components/seo"

// const store = createStore(imageReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Newest Posts</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div style={{width: '100%', margin: '10px', padding: '15px', 'min-height': '20vh'}}>
        <Carousel/>
      </div>
      <Card showall='true'/>

    </div>
  </Layout>
)



export default IndexPage
