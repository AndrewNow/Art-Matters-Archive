import React from "react"
import styled from "styled-components"
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion"

import {breakpoints} from '../../components/layout'

const NewEditionBanner = () => {
  // ---------- ANIMATE ON SCROLL LOGIC ----------
  const { scrollYProgress } = useViewportScroll()

  const xRightRange = useTransform(
    scrollYProgress,
    scrollYProgress => scrollYProgress * 1000
  )
  const xLeftRange = useTransform(
    scrollYProgress,
    scrollYProgress => scrollYProgress * -1000
  )

  const scrollRight = useSpring(xRightRange, { stiffness: 150, damping: 50 })
  const scrollLeft = useSpring(xLeftRange, { stiffness: 150, damping: 50 })

  return (
    <NewEdtionBanner>
      <NewEditionBannerContent style={{ x: scrollRight }}>
        EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION{" "}
      </NewEditionBannerContent>
      <br />
      <NewEditionBannerContent style={{ x: scrollLeft }}>
        EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION{" "}
      </NewEditionBannerContent>
    </NewEdtionBanner>
  )
}

const NewEdtionBanner = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 550px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;

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
  text-shadow: 1px 1px 5px rgba(188, 188, 188, 0.48);

  @media (max-width: ${breakpoints.m}px) {
    font-size: 100px;
  }
`

export default NewEditionBanner
