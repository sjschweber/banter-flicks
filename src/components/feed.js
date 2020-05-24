// import React from "react"
// import { Link, StaticQuery, graphql} from "gatsby"
// import Template from '../templates/blogTemplate.js'
//
// import Card from "../components/card"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
//
//
// export default function Feed(){
//
//   return (
//     <StaticQuery
//         query ={graphql`
//           allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   date(formatString: "MMMM DD, YYYY")
//                   title
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <
//       )}
//   )
// }
