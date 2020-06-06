import React, {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { incrementAsync } from '../actions/index.js'
import ReduxThunk from 'redux-thunk';
import { connect } from "react-redux"
import cx from 'clsx';
import {createStore} from '../state/createStore.js'
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { Link, StaticQuery, useStaticQuery, graphql} from "gatsby"

import './scroll.css'


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
    minWidth: 300,
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    letterSpacing: '2px',
  },
}));



const HeadlineCard = ({data, styles, mediaStyles, shadowStyles}) => (

  data.allMarkdownRemark.edges
  .sort((a, b) => b.node.frontmatter.date - a.node.frontmatter.date).slice(0, 3)
  .map(item =>{
    return(
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
            classes={mediaStyles}
            image={item.node.frontmatter.thumbnail}
          />
        <CardActionArea>
          <CardContent className={styles.content}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              minHeight={360}
              color={'common.white'}
              textAlign={'center'}
            >
              <h1 className={styles.title}>{item.node.frontmatter.title}</h1>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  })
)

export function ScrollList({next, incrementAsync}){

  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();

  return(
    <StaticQuery
      query = {graphql`
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
                  thumbnail
              }
            }
          }
        }
      }
    `}
    render={data => {
      return(
      <Box
        display={'flex'}
        flexDirection={'row'}
        width={'75vw'}
        >
        <HeadlineCard data={data} styles={styles} mediaStyles={mediaStyles} shadowStyles={shadowStyles}/>
      </Box>
    )}

}
  />
)
}
const mapStateToProps = ({next}) => ({next})
const mapDispatchToProps = dispatch => ({ incrementAsync: () => dispatch(incrementAsync()) })
console.log("dispatch/props ", mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(ScrollList)
