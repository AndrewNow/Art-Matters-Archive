// import React from "react"
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { archive } from '../components/Sidebar/Sidebar'


// const imageQuery = ({data}) => (
//   {data.slideshow.edges.map(({ node }) => (
//     <GatsbyImage
//       image={node.childImageSharp.gatsbyImageData}
//       alt={node.base}
//       key={node.id}
//     />
//   ))}
// )

// export default imageQuery

// export const pageQuery = graphql`
//   query($archive: String!) {
//     slideshow: allFile(
//       filter: { relativeDirectory: { eq: $archive } }
//       sort: { fields: base, order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           base
//           childImageSharp {
//             gatsbyImageData(
//               width: 600
//               placeholder: BLURRED
//               quality: 70
//               blurredOptions: { width: 100 }
//             )
//           }
//         }
//       }
//     }
//   }
// `



