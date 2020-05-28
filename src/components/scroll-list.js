import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Img from '../images/dark-knight.jpg'
import Jaw from '../images/jaw.png'
import { Link, StaticQuery, useStaticQuery, graphql} from "gatsby"

import './scroll.css'



export default function ScrollList(){

  const data = useStaticQuery(graphql`
    query{
       allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              author
              genre
              slug
              image
          }
        }
      }
    }
  }
}
`)

const newPosts = data.allMarkdownRemark.edges
.sort((a, b) => b.frontmatter.date - a.frontmatter.date).slice(0, 2);

  return(

    <div id="container">
      <div>
        <IconButton>
          <ChevronLeftIcon/>
        </IconButton>
      </div>
        <img src= {newPosts[0].frontmatter.image}/>
      <div>
        <IconButton>
          <ChevronRightIcon/>
        </IconButton>
      </div>
    </div>
  )
}
