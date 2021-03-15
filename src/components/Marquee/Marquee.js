import React from "react"
import styled from "styled-components"
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion"
import {breakpoints} from '../../components/layout'

const Marquee = () => {
  
  // ---------- PARALLAX SCROLL LOGIC USING FRAMER ----------
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(
    scrollYProgress,
    scrollYProgress => scrollYProgress * -400
  )
  const y = useSpring(yRange, { stiffness: 125, damping: 50 })
  return (
    <MarqueeContainer>
      <MarqueeContent style={{ y: y }}>
        <h1>ART MATTERS ART MATTERS ART MATTERS</h1>
      </MarqueeContent>
    </MarqueeContainer>
  )
} 

const MarqueeContainer = styled(motion.div)`
  z-index: -1;
  position: relative;
  overflow: hidden;
  display: block;
  /* max-height: 100%; */
  width: 8%;
  left: -5px;
  filter: blur(2px);

  @media (max-width: ${breakpoints.m}px) {
    left: -3px;
    filter: blur(4px);
  }
`

const MarqueeContent = styled(motion.div)`
  height: 300vh;
  //this works bc the body doc is 200vh tall

  position: relative;
  display: block;
  font-size: 120px;
  /* overflow: hidden; */
  line-height: 105px;
  white-space: nowrap;
  margin: 0;
  left: 0;

  & h1 {
    writing-mode: vertical-rl;
    font-family: "at_surt_italic";
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 55px;
    line-height: 40px;
  }
`

export default Marquee