import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Marquee from "../components/Marquee/Marquee"
import { breakpoints } from "../components/layout"
import Sidebar from "../components/Sidebar/Sidebar"
import HomepageAnimation from "../components/homepageAnimation"
import { motion } from "framer-motion"
import { graphql } from "gatsby"

const banner = {
  initial: {
    transition: { staggerChildren: 0.1 },
  },
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 1.1,
    },
  },
}

const letterAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.5,
      delay: 2,
    },
  },
}

const IndexPage = ({ data }) => {
  const Archive = "ARCHIVE"
  return (
    <Layout>
      <SEO title="Archive" />
      <Marquee />
      <MainPage>
        <HomepageAnimation />
        <ArchiveTitleWrapper
          variants={banner}
          initial="initial"
          animate="animate"
        >
          {[...Archive].map((text, index) => (
            <ArchiveTitle key={index} variants={letterAnimation}>
              {text}
            </ArchiveTitle>
          ))}
        </ArchiveTitleWrapper>
        {/* <ArchiveTitle>ARCHIVE</ArchiveTitle> */}
        <Bio variants={letterAnimation} initial="initial" animate="animate">
          Art Matters has been running for more than 20 years now. Thanks to
          community contributions, we have been able to preserve and document
          our history. This website is an ode to the past, a nod to the future,
          and a reminder that hard work can leave a lasting mark.
        </Bio>
        <Sidebar data={data} />
        {/* Sidebar component includes the NewEditionBanner from components/Marquee */}
      </MainPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  # all the queries for gatsby-plugin-image. commented out years have no data.
  query {
    # slideshow2000: allFile(
    #   filter: { relativeDirectory: { eq: "2000" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
    # slideshow2001: allFile(
    #   filter: { relativeDirectory: { eq: "2001" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
    # slideshow2002: allFile(
    #   filter: { relativeDirectory: { eq: "2002" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
    slideshow2003: allFile(
      filter: { relativeDirectory: { eq: "2003" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    # slideshow2004: allFile(
    #   filter: { relativeDirectory: { eq: "2004" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
    slideshow2005: allFile(
      filter: { relativeDirectory: { eq: "2005" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2006: allFile(
      filter: { relativeDirectory: { eq: "2006" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2007: allFile(
      filter: { relativeDirectory: { eq: "2007" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2008: allFile(
      filter: { relativeDirectory: { eq: "2008" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2009: allFile(
      filter: { relativeDirectory: { eq: "2009" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2010: allFile(
      filter: { relativeDirectory: { eq: "2010" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2011: allFile(
      filter: { relativeDirectory: { eq: "2011" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2012: allFile(
      filter: { relativeDirectory: { eq: "2012" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2013: allFile(
      filter: { relativeDirectory: { eq: "2013" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2014: allFile(
      filter: { relativeDirectory: { eq: "2014" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2015: allFile(
      filter: { relativeDirectory: { eq: "2015" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2016: allFile(
      filter: { relativeDirectory: { eq: "2016" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    slideshow2017: allFile(
      filter: { relativeDirectory: { eq: "2017" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    # slideshow2018: allFile(
    #   filter: { relativeDirectory: { eq: "2018" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
    slideshow2019: allFile(
      filter: { relativeDirectory: { eq: "2019" } }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    # slideshow2020: allFile(
    #   filter: { relativeDirectory: { eq: "2020" } }
    #   sort: { fields: base, order: ASC }
    # ) {
    #   edges {
    #     node {
    #       id
    #       base
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 600
    #           placeholder: BLURRED
    #           quality: 90
    #           blurredOptions: { width: 100 }
    #         )
    #       }
    #     }
    #   }
    # }
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
              quality: 90
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
  }
`

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
//               quality: 90
//               blurredOptions: { width: 100 }
//             )
//           }
//         }
//       }
//     }
//   }
// `

const MainPage = styled.div`
  z-index: 0;
  position: absolute;
  overflow-x: hidden;
  /* *** */
  overflow-y: hidden;
  /* *** */
  top: 0;
  right: 0;
  width: 92.5%;
  height: 300vh;
  background-color: #ece9e3;
  border-left: 1px solid black;
  box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.m}px) {
    /* right: auto; */
  }
`
const ArchiveTitleWrapper = styled(motion.div)`
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
`

const ArchiveTitle = styled(motion.span)`
  font-family: "at_surt_regular";
  letter-spacing: -0.1rem;
  display: inline-block;
  position: relative;
  /* margin: 0 auto; */

  font-size: 16.25vw;
  text-align: center;

  color: #ffffff95;
  -webkit-text-stroke: 1px solid rgba(255, 255, 255, 0.56);
  text-shadow: 10px 3px 16px #ece9e3, 0 0 0 #fff, -10px -3px 26px #fff;

  /* alt color below */
  /* text-shadow: 10px 3px 16px #ece9e3, 0 0 0 #fff, -10px -3px 16px #fff; */
  /* filter: blur(.5px); */

  @media (max-width: ${breakpoints.l}px) {
    padding-top: 1rem;
    font-size: 14vw;
    text-shadow: 10px 3px 16px #ece9e3, 0 0 0 #fff, -10px -3px 16px #fff;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 80px;
    text-shadow: 2px 3px 10px #ece9e3, 0 0 0 #fff, -5px -1px 4px #fff;
  }
  @media (max-width: ${breakpoints.s}px) {
    /* margin: 0 auto; */
    /* text-align: left; */
    /* width: 90%; */
    padding-top: 2rem;
    font-size: 62px;
    color: #ffffff95;
    text-shadow: 2px 3px 10px #ece9e3, 0 0 0 #fff, -5px -1px 4px #fff;
  }
`

const Bio = styled(motion.h2)`
  font-size: 64px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 28px;
    padding-bottom: 5rem;
    padding-top: 1rem;
  }
`

export default IndexPage
