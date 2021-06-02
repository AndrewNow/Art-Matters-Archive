import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const galleryQuery2021 = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          slideshow2021: allFile(
            filter: { relativeDirectory: { eq: "2021" } }
            sort: { fields: base, order: ASC }
          ) {
            edges {
              node {
                id
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 600
                    placeholder: BLURRED
                    quality: 70
                    blurredOptions: { width: 100 }
                  )
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.slideshow2021.edges.map(({ node }) => (
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
            key={node.id}
          />
        ))
      }
    />
  )
}

export default galleryQuery2021