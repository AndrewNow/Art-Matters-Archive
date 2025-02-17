import React from "react"
import styled from "styled-components"
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion"
import { breakpoints } from "../../components/layout"

const NewEditionBanner = () => {
  // ---------- ANIMATE ON SCROLL LOGIC ----------
  let _ = require("lodash")
  const { scrollYProgress } = useViewportScroll({ passive: true })

  const xRightRange = useTransform(
    scrollYProgress,
    _.throttle(scrollYProgress => scrollYProgress * 500)
  )
  const xLeftRange = useTransform(
    scrollYProgress,
    _.throttle(scrollYProgress => scrollYProgress * -500)
  )

  const scrollRight = useSpring(xRightRange, {
    stiffness: 125,
    damping: 50,
  })
  const scrollLeft = useSpring(xLeftRange, {
    stiffness: 125,
    damping: 50,
  })

  return (
    <NewEdtionBanner>
      <NewEditionBannerContent style={{ x: scrollLeft, rotation: 0.02 }}>
        <p>EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION </p>
      </NewEditionBannerContent>
      <br />
      <NewEditionBannerContent style={{ x: scrollRight, rotation: 0.02 }}>
        <p>EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION </p>
      </NewEditionBannerContent>
    </NewEdtionBanner>
  )
}

const NewEdtionBanner = styled(motion.div)`
  /* position: relative; */
  position: relative;
  overflow: hidden;
  /* display: inline-block; */
  width: 100%;
  height: 550px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  cursor: pointer;

  p {
    color: white;
  }
  
  text-shadow: 1px 1px 5px rgba(188, 188, 188, 0.48);
  transition: 0.45s text-shadow ease;

  :hover {
    text-shadow: 3px 3px 20px rgba(200, 188, 200, 1);
  }

  @media (max-width: ${breakpoints.xxl}px) {
    height: 410px;
  }

  @media (max-width: ${breakpoints.xl}px) {
    height: 390px;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 310px;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 270px;
  }
`

const NewEditionBannerContent = styled(motion.div)`
  position: relative;
  white-space: nowrap;
  left: -1800px;
  color: white;
  font-size: 210px;

  @media (max-width: ${breakpoints.xxl}px) {
    font-size: 165px;
  }
  @media (max-width: ${breakpoints.xl}px) {
    font-size: 150px;
  }
  @media (max-width: ${breakpoints.l}px) {
    font-size: 120px;
  }
  @media (max-width: ${breakpoints.m}px) {
    font-size: 100px;
  }
`

export default NewEditionBanner
