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
import {FaceBookShareButton, FacebookIcon} from 'react-share';
import Typography from '@material-ui/core/Typography';


import SEO from "../components/seo"

// const store = createStore(imageReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1 style={{'text-align': 'center'}}>Everyone's A Critic</h1>
    <h3 style={{'text-align': 'center'}}>Home</h3>
    <div style={{position: 'fixed', bottom: '5%'}}>
      <FacebookIcon round/>
    </div>

    <Carousel/>
    <Card showall='true'/>





  </Layout>
)



export default IndexPage
