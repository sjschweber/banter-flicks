import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';

import { Link, StaticQuery, useStaticQuery, graphql} from "gatsby"

import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const useStyles = makeStyles(() => ({
  root: {
    width: '50vw',
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));



const Post = ({data, classes, mediaStyles, textCardContentStyles, shadowStyles, page, showall}) => (
  data.allMarkdownRemark.edges
  .filter(item => item.node.frontmatter.genre===page || showall==='true')
  .map(item =>{
   return(
    <Card style={{'margin-bottom': 25, 'margin-top': 25}} className={cx(classes.root, shadowStyles.root)}>
    <CardMedia
      classes={mediaStyles}
      image={item.node.frontmatter.thumbnail}
    />
      <CardContent className={classes.content}>
        <Typography className={classes.bullet} color="textSecondary">
          {item.node.frontmatter.author}
        </Typography>
        <Typography variant="h5" component="h2">
          {item.node.frontmatter.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.node.frontmatter.genre}
        </Typography>
      </CardContent>

      <CardActions>
        <Link to={item.node.frontmatter.slug} style={{textDecoration: 'none'}}>
          <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>

  )
  })
)

export default function SimpleCard (props){
    const classes=useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const bull = <span className={classes.bullet}>•</span>;

    console.log(props.page)

    return (
    <StaticQuery
      query ={graphql`
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
    render={data => <Post data={data} mediaStyles={mediaStyles} textCardContentStyles={textCardContentStyles} shadowStyles={shadowStyles} classes={classes} page={props.page} showall={props.showall} />}

  />

)
}
