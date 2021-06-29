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
import { RiArrowRightUpLine, RiInstagramFill } from "react-icons/ri"
import { FaPhoneAlt, FaFacebook } from "react-icons/fa"


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
      delay: 0,
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
        {/* <HomepageAnimation /> */}
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
        <Bio variants={letterAnimation} initial="initial" animate="animate">
          Art Matters has been running for more than 20 years now. Thanks to
          community contributions, we have been able to preserve and document
          our history. This website is an ode to the past, a nod to the future,
          and a reminder that hard work can leave a lasting mark.
        </Bio>
        <Sidebar data={data} />
        {/* Sidebar component includes the NewEditionBanner from components/Marquee */}
        <Footer>
          <SeeMore>
            <h2>Want to see more?</h2>
            <WebsiteLink
              href="https://www.artmattersfestival.org/"
              target="blank"
            >
              <p>Visit our website</p>
              <RiArrowRightUpLine style={{ fontSize: "1.75em" }} />
            </WebsiteLink>
            <WebsiteLinkOverlay></WebsiteLinkOverlay>
          </SeeMore>
          <ContactUs>
            <h2>Contact us</h2>
            <a href="https://goo.gl/maps/wbZsK4UeWQ9Kyi35A" target="blank">
              VA-038, Concordia University <br />
              1395 René Levesque Blvd. W. <br />
              Montréal, QC <br />
              +1.514.848.2424 x 5011
              <br />
            </a>

            <SocialMediaLinks>
              <a
                href="https://www.instagram.com/artmattersfestival/"
                target="blank"
              >
                <RiInstagramFill style={{ fontSize: "2em" }} />
              </a>
              <a
                href="https://www.facebook.com/artmattersfestival/"
                target="blank"
              >
                <FaFacebook style={{ fontSize: "1.75em" }} />
              </a>
              <a href="tel:514-848-2424" target="blank">
                <FaPhoneAlt style={{ fontSize: "1.75em" }} />
              </a>
            </SocialMediaLinks>
          </ContactUs>
        </Footer>
      </MainPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  # all the queries for gatsby-plugin-image. commented out years have no data.
  # to add a new year, simply copy one block and change all mentions of the year number.
  # make sure you also add a folder within the /images directory with that year,
  # ensuring that all pictures are numbered properly and that the files are all .jpg format
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
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
    #           quality: 80
    #           blurredOptions: { width: 80 }
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
              quality: 80
              blurredOptions: { width: 80 }
            )
          }
        }
      }
    }
  }
`

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
  height: 373vh;
  /* when editing the height, make sure you also edit MarqueeContent's VH in /Marquee.js */
  background-color: #ece9e3;
  border-left: 1px solid black;
  box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.15);
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
  color: #202020;
  font-size: 64px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 28px;
    padding-bottom: 7rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
    padding-top: 1rem;
  }
`

const Footer = styled.div`
  width: 100%;
  height: 400px;
  border-top: 1px black solid;
  display: flex;
  padding: 5rem;
  padding-bottom: 0;
  background: linear-gradient(
    83.94deg,
    #ffffff 0.87%,
    rgba(255, 255, 255, 0) 49.87%
  );

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem;
  }
  

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    height: 800px;
  }
`

const SeeMore = styled.div`
  padding: 2rem 4rem;

  & h2 {
    color: #202020;
    font-size: 64px;
    padding-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.xl}px) {
    & h2 {
      font-size: 40px;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    padding: 1rem;
    padding-top: 3rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding-top: 3rem;
    & h2 {
      font-size: 32px;
    }
  }
`

const WebsiteLink = styled.a`
  color: #202020;
  border: 1px solid black;
  width: 425px;
  height: 60px;
  font-size: 18px;

  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  transition: 0.5s ease;

  & p {
    align-self: center;
    padding-left: 1rem;
  }

  & :hover {
    -webkit-box-shadow: 0px 0px 27px 5px rgba(82, 0, 255, 0.52);
    box-shadow: 0px 0px 27px 5px rgba(82, 0, 255, 0.52);
  }

  & :hover {
    & svg {
      color: #202020;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 250px;
    height: 50px;

    & p {
      font-size: 16px;
    }
  }
`

const WebsiteLinkOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.5s ease;

  & :hover {
    width: 100%;
  }
`

const ContactUs = styled.div`
  padding: 2rem 4rem;
  padding-left: 10rem;
  color: #202020;

  & h2 {
    font-size: 64px;
    padding-bottom: 1.6rem;
  }

  & a {
    font-size: 18px;
    text-decoration: none;
    color: #202020;
    transition: 0.2s all ease-in-out;

    & :hover {
      color: #5200ff;
      text-shadow: 0px 0px 3px rgba(82, 0, 255, 0.4);
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding-left: 1rem;

    & h2 {
      font-size: 40px;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
    padding-top: 3rem;
    & h2 {
      font-size: 32px;
    }
    & a {
      font-size: 16px;
    }
  }
`

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  width: 150px;

  & svg {
    padding: 0.25rem;
    color: #3a3a3a;
    transition: 0.2s all ease-in-out;

    & :hover {
      color: #5200ff;
    }
  }
`


export default IndexPage
