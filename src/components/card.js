import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link, StaticQuery, useStaticQuery, graphql} from "gatsby"

const useStyles = makeStyles({
  root: {
    minWidth: '50vw',
    minHeight: '20vh',
    padding: '15px',
    margin: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = ({data, classes, page, showall}) => (
  data.allMarkdownRemark.edges
  .filter(item => item.node.frontmatter.genre===page || showall==='true')
  .map(item =>{
   return(
    <Card className={classes.root}>
      <CardContent>
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
              }
            }
          }
        }
      }
    `}
    render={data => <Post data={data} classes={classes} page={props.page} showall={props.showall} />}

  />

)
}
