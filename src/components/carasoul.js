import React, { Component, useState, useEffect } from 'react';
import {Fade, Slide, IconButton} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import autoBind from 'auto-bind';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link, useStaticQuery, graphql} from "gatsby"


import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';

const animation = 'fade';
const timeout = 500;

const useStyles = makeStyles(() => ({
  root: {
    //maxWidth: 304,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
    width: '45vw'

  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: 'black',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  media: {
    height: '40vh',
    width: '100%'
  },
  title: {
    color: 'black',
    letterSpacing: '2px',
  },
}));

export function Carousel () {

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
              thumbnail
            }
          }
        }
      }
    }`)

  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [timer1, setTimer1] = useState(null);
  const [interval1, setInterval1] = useState(4000);
  const children = data.allMarkdownRemark.edges


  function start(){



  }

  function stop(){

    clearInterval(timer1)
    setTimer1(null)

  }

  function reset(){
    stop()
    start()
  }

  useEffect(() => {

    setTimer1(setInterval(()=>{

      const next = active + 1 > children.length - 1 ? 0: active + 1;

      setActive(next)
      setDisplayed(active)

      setTimeout(() => setDisplayed(next), timeout);

    }, interval1))

    return () => {
      clearInterval(timer1)
    }

  }, [active, displayed])

  return(


    data.allMarkdownRemark.edges.map((item, index) => {
      return(
          <CarouselItem key={index} slug={item.node.frontmatter.slug} active={index === active ? true: false} displayed={index === displayed ? true: false} img={item.node.frontmatter.thumbnail} title={item.node.frontmatter.title}/>
      )

    })

  )

}


function CarouselItem({title, active, displayed, img, slug}) {

  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  const slopeStyles = useSlopeCardMediaStyles();

  return(
    displayed ?
    (<div>
      <Fade in={active} timeout={timeout}>
        <Card className={styles.root} classes={shadowStyles}>


            <CardMedia  className={styles.media} image={img}/>
            <CardContent>
              {title}
            </CardContent>
      

          <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to={slug} style={{textDecoration: 'none'}}>
        <Button size="small" color="primary">
          Read More
        </Button>
        </Link>
      </CardActions>
        </Card>
      </Fade>
    </div>) : null

  )

}
