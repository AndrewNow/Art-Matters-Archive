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
        <a>EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION </a>
      </NewEditionBannerContent>
      <br />
      <NewEditionBannerContent style={{ x: scrollLeft }}>
        <a>EDITION 2021 EDITION 2021 EDITION 2021 EDITION 2021 EDITION </a>
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
  cursor: pointer;
  text-shadow: 1px 1px 5px rgba(188, 188, 188, 0.48);

  transition: 0.3s text-shadow ease;
  & :hover {
    text-shadow: 1px 1px 7px rgba(188, 188, 188, 0.8);
    /* background-color: #33333302; */
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

  @media (max-width: ${breakpoints.m}px) {
    font-size: 100px;
  }
`

export default NewEditionBanner
